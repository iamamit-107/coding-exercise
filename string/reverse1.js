function revStr(str) {
    const len = str.length - 1;
    let newStr = "";

    for (let i = len; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
}

console.log(revStr("hello dolli"));
// illod olle

//+++++++++++++++++++++++++++++++++++++++++++++++

//using library function
function revStr(str) {
    let newStr = str.split("").reverse().join("");

    return newStr;
}

console.log(revStr("hello dolli"));

//+++++++++++++++++++++++++++++++++++++++++++++

//in place reverse
function revStr(str) {
    return str.split(" ").reverse().join(" ").split("").reverse().join("");
}

console.log(revStr("I am a student"));
//I ma a tneduts
