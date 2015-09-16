document.addEventListener("DOMContentLoaded", function (event) {
    // character controls
    var controls = [
        'u', // right punch
        'i', // left punch
        'o', // charge
    ];

    var movement = [
        'w', // upward
        'a', // backward
        's', // downward
        'd', // forward
    ];

    var direction = [
        'upward', // w
        'backward', // a
        'downward', // s
        'forward', // d
    ];

    // detect keyboard input
    var getKeyChar = function(event) {
        var keyNum = event.which || event.keyCode;
        return keyChar = String.fromCharCode(keyNum).toLowerCase();
    };

    // check if pressed key
    var down = false;

    var moveKey = {};

    // instance player
    goku_ss3 = new dbzCharacter("goku_ss3");

    this.addEventListener("keydown", function (event) {
        var keyChar = getKeyChar(event);
        var d = movement.indexOf(keyChar);

        if (d === parseInt(d, 10)) {
            moveKey[direction[d]] =  keyChar;
            goku_ss3.checkInput(moveKey);
        };
    });

    this.addEventListener("keyup", function (event) {
        var keyChar = getKeyChar(event);
        var d = movement.indexOf(keyChar);
        console.log('keyup: '+d);
        if (d === parseInt(d, 10)) {
            delete moveKey[direction[d]];
        }

        // down = false;
        goku_ss3.dbzStance();
    });
});