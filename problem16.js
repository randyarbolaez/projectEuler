// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 21000?

const powerDigitSum = (num,power) => {
    let wholeNumberToString = BigInt(num ** power).toString()
    let i = 0;
    let total = 0;
    while(i !== wholeNumberToString.length){
        total += parseInt(wholeNumberToString[i]);
        i++;
    }
    return total;
}

console.log(powerDigitSum(2,1000))
