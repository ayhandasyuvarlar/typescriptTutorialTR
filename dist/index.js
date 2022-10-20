"use strict";
let myname = 'asdasd';
function change() {
    myname = 25;
    myname = 'asdas';
    check(myname);
}
function check(myname) {
    if (typeof myname === 'string') {
        console.log(myname.toUpperCase())
    }
    if (typeof myname === 'number') {
       console.log( myname.toPrecision())
    }
}
change();
