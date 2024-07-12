const removeFromArray = function(original, ...remove) {
    const newArray = [];
    console.log(original);
    console.log(remove);
    outer : for (const originalNum of original) {
        for (const removeNum of remove) {
            if (originalNum === removeNum) {
                continue outer; 
            }
        }
        newArray.push(originalNum);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
