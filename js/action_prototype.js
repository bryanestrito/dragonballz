var dbzCharacter = function (dbzId) {
    // object id
    this.dbzId = dbzId;

    // prefix / suffix
    this.dbzClassPrefix = dbzId+"_";
    this.dbzLengthUnit = "px";
    this.dbzUpwardDownwardDistance = 250;
    this.dbzForwardBackwardDistance = 250;
    this.dbzMovementDistance = 50;

    // timning events
    this.dbzTimeout = 0;
    this.dbzInterval = 0;

    this.dbzMovements = {
        stance:this.dbzClassPrefix+"stance",
        upward:this.dbzClassPrefix+"upward",
        downward:this.dbzClassPrefix+"downward",
        forward:this.dbzClassPrefix+"forward",
        backward:this.dbzClassPrefix+"backward"
    };
};

dbzCharacter.prototype.checkInput = function (keys) {
    var chars = [];

    for (var i in keys) {
        if (!keys.hasOwnProperty(i)) continue;
        chars.push(i);
    }

    
}

dbzCharacter.prototype.dbzStance = function () {
    document.getElementById(this.dbzId).className = this.dbzMovements.stance;

    elem = document.getElementById(this.dbzId);
    prop = window.getComputedStyle(elem, null);

    document.getElementById(this.dbzId).style.left = prop.left;
    document.getElementById(this.dbzId).style.top = prop.top;
};

dbzCharacter.prototype.dbzMovement = function (movement, direction, incdec) {
    dbzChar = document.getElementById(this.dbzId);

    if (dbzChar.classList.contains(movement)) {
        return;
    }

    dbzCharacter.classList.add(movement);

    styleProp = window.getComputedStyle(dbzChar, null);

    if (incdec) {
        goingTo = parseInt(prop.direction) + this.dbz
    }
}

dbzCharacter.prototype.dbzForward = function () {
    dbzChar = document.getElementById(this.dbzId);

    if (!dbzChar.classList.contains(this.dbzMovements.forward)) {
        lastClass = dbzChar.className;
        dbzChar.className = lastClass + " " + this.dbzMovements.forward;
    }

    prop = window.getComputedStyle(dbzChar, null);
    toTheLeft = parseInt(prop.left) + this.dbzMovementDistance + this.dbzLengthUnit;
    dbzChar.style.left = toTheLeft;
};

dbzCharacter.prototype.dbzBackward = function () {
    dbzChar = document.getElementById(this.dbzId);

    if (!dbzChar.classList.contains(this.dbzMovements.backward)) {
        lastClass = dbzChar.className;
        dbzChar.className = lastClass + " " + this.dbzMovements.backward;
    }

    prop = window.getComputedStyle(dbzChar, null);
    toTheLeft = parseInt(prop.left) - this.dbzMovementDistance + this.dbzLengthUnit;
    dbzChar.style.left = toTheLeft;
};

dbzCharacter.prototype.dbzUpward = function () {
    dbzChar = document.getElementById(this.dbzId);

    if (!dbzChar.classList.contains(this.dbzMovements.upward)) {
        lastClass = dbzChar.className;
        dbzChar.className = lastClass + " " + this.dbzMovements.upward;
    }

    prop = window.getComputedStyle(dbzChar, null);
    toTheTop = parseInt(prop.top) - this.dbzMovementDistance + this.dbzLengthUnit;
    dbzChar.style.top = toTheTop;
};

dbzCharacter.prototype.dbzDownward = function () {
    dbzChar = document.getElementById(this.dbzId);

    if (!dbzChar.classList.contains(this.dbzMovements.downward)) {
        lastClass = dbzChar.className;
        dbzChar.className = lastClass + " " + this.dbzMovements.downward;
    }

    prop = window.getComputedStyle(dbzChar, null);
    toTheTop = parseInt(prop.top) + this.dbzMovementDistance + this.dbzLengthUnit;
    dbzChar.style.top = toTheTop;
};

dbzCharacter.prototype.dbzPunch = function (hand) {
    var className = (hand == "left") ? "punchLeft" : "punchRight";
    document.getElementById(this.dbzId).className = this.dbzId+"_"+className;
};

// dbzCharacter.prototype.dbzCharge = function() {
//     document.getElementById(this.dbzId).className = "charge1";

//     setTimeout(function () {
//         document.getElementById("goku4").className = "charge2";
//     }, 1000);

//     setTimeout(function () {
//         document.getElementById("goku4").className = "charge3";
//     }, 2000);

//     setTimeout(function () {
//         setInterval(function () {
//             chargeClass = document.getElementById("goku4").className;
//             mustChargeClass = (chargeClass == "charge2") ? "charge3" : "charge2";

//             document.getElementById("goku4").className = mustChargeClass;
//         }, 10);
//     }, 3000);
// }

// dbzCharacter.prototype.dbzChargeTimeout = function() {
//     document.getElementById("goku4").className = "charge2";
// };

// dbzCharacter.prototype.dbzChargeInterval = setInterval(function () {
//     var chargeClass = document.getElementById("goku4").className
//     var mustChargeClass = (chargeClass == "charge2") ? "charge3" : "charge2";

//     document.getElementById("goku4").className = mustChargeClass;
// }, 100);