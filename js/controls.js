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

    var keys = {};
    var moveKey = {};

    // instance player
    goku_ss3 = new dbzCharacter("goku_ss3");

    this.addEventListener("keydown", function (event) {
        var keyChar = getKeyChar(event);
        // keys[keyChar] = true;

        if (d = movement.indexOf(keyChar)) {
            moveKey[direction[d]] =  keyChar;
            goku_ss3.checkInput(moveKey);
        };

        if (keyChar == "w") {
            // if (down) return;
            // down = true;
                console.log(keyChar);
            goku_ss3.dbzUpward();
        };

        if (keyChar == "s") {
            // if (down) return;
            // down = true;
console.log(keyChar);
            goku_ss3.dbzDownward();
        }

        if (keyChar == "d") {
            // if (down) return;
            // down = true;
console.log(keyChar);
            goku_ss3.dbzForward();
        }

        if (keyChar == "a") {
            // if (down) return;
            // down = true;
            console.log(keyChar);
            goku_ss3.dbzBackward();
        }
    });

    this.addEventListener("keyup", function (event) {
        var keyChar = getKeyChar(event);
            delete keys[keyChar];

        down = false;
        goku_ss3.dbzStance();
    });
});