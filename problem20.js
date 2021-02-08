// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800, and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Find the sum of the digits in the number 100!

const factorialDigitSum = () => {
    let total = 0;
    let factorial = getFactorial(100n).toString();
    console.log(factorial);
    let i = 0;
    while(i !== factorial.length){
        total += Number(factorial[i])
        i++;
    }
    return total;
};

const getFactorial = (num) => {
    let total = 1n;
    while(num > 1n){
        total = total * num;
        num--;
    }
    return BigInt(total);
}

console.log(factorialDigitSum())
