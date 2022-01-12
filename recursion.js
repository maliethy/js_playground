const factorial = function (number) {
    if (number > 0) {
        return number * factorial(number - 1);
    } else {
        return 1;
    }; ``
};
// console.log(factorial(3));
const factorial2 = (function () {
    let save = {};
    const fact = function (number) {
        if (number > 0) {
            let saved = save[number - 1] || fact(number - 1);
            const result = number * saved;
            save[number] = result;
            // console.log(saved, result);
            return result;
        } else {
            return 1;
        };
    };
    return fact;
})();
factorial2(4);
// console.log(factorial2(4));

const fibonacci = (function () {
    let save = {};
    const fibo = function (number) {
        if (number < 2) {
            return number;
        } else {
            let saved1 = save[number - 1] || fibo(number - 1);
            let saved2 = save[number - 2] || fibo(number - 2);
            let result = saved1 + saved2;
            save[number] = result;
            console.log(save, saved1, saved2, result);
            return result;
        }
    };
    return fibo;
})();
console.log(fibonacci(5));