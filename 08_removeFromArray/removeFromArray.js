const removeFromArray = function(arr, num) {
    // get num index
    // splice the num
    const index = arr.indexOf(num);
    arr.splice(index, 1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
