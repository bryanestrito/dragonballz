var dbz = function(id) {
    this.dbzId = id;
};

dbz.prototype.dbzMove = function (direction) {
    // up = + top
    // down = - top
    // left = + left
    // right = - left

    dbzChar = document.getElementById(this.dbzId);
    dbzStyle = window.getComputedStyle(dbzChar, null);











    document.getElementById(this.dbzId).className = "forward";

    elem = document.getElementById(goku.dbzId);
    prop = window.getComputedStyle(elem, null);
    toTheLeft = parseInt(prop.left) + 10 + "px";
    
    document.getElementById(this.dbzId).style.left = toTheLeft;
}
