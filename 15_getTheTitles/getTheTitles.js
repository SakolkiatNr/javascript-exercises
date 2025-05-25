const getTheTitles = function(arr) {
    return arr.reduce((list, value) => {
        list.push(value.title);
        return list;
    } ,[]);
};

// Do not edit below this line
module.exports = getTheTitles;