
function checkPalindrome(inp) {
    let result = {};
    let reversed = "";
    for (let i = inp.length - 1; i >= 0; i--) {
        reversed += inp[i];
    }
    console.log(reversed);
    if (inp === reversed) {
        result.isPalindrome = true;
    } else {
        result.isPalindrome = false;
    };
    // let result = {
    //     //original: inp,
    //     reversed: reversed,
    //     isPalindrome: inp === reversed
    // };
    return result;
}

console.log(checkPalindrome("madam"));