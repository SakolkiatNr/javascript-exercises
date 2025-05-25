const palindromes = function (string) {
// remove space and punctuations
// convert to lowercase
// run forward 
// run backward
// check string
    let newString = string.toLowerCase();
    let forwardString = '';
    for (let i = 0; i < string.length; i++) {
        if ((newString.charCodeAt(i) >= 97 && newString.charCodeAt(i) <= 122) ||
             (newString.charCodeAt(i) >= 48 && newString.charCodeAt(i) <= 57)) {
            forwardString += newString[i];
        }
    }

    let backwardString = forwardString.split('').reverse().join('');
    if (forwardString === backwardString) return true;
    else return false;
}

// Do not edit below this line
module.exports = palindromes;
