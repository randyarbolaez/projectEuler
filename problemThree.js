// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?

const largestPrimeFactor = (num) => {
    let largestPrimeNum;
    let dividend = num
    let divisor = 2;
    while(dividend >= divisor){
        if(dividend % divisor === 0){
            dividend = dividend / divisor;
            largestPrimeNum =  divisor
        }
        divisor++;
    }
    return largestPrimeNum;
}

console.log(largestPrimeFactor(600851475143))
