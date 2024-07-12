const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 || num2 < 0 || typeof(num1) !== "number" || typeof(num2) !== "number") {
        return 'ERROR';
    }

    start = (num1 < num2) ? num1:
    num2;
    finish = (num1 > num2) ? num1:
    num2;

    console.log(start);
    console.log(finish);

    for (let i = start; i <= finish; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
