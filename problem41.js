// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.
// What is the largest n-digit pandigital prime that exists?

const pandigitalPrime = () => {
    let largestPandigital = 987654321;
    let i = 0;
    while(true){
        if(isPandigital(largestPandigital) && isPrime(largestPandigital)){
            return largestPandigital;
        }
        largestPandigital--;
    }
}

const isPrime =(num)=> {
    for ( let i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

const isPandigital = (num) =>{
    let map = {};
    let strNum = num.toString();
    let i = 0;
    while(i !== strNum.length){
        if(map[strNum[i]] === undefined){
            map[strNum[i]] = i;
        } else{
            return false;
        }
        i++;
    }
    return true;
}

console.log(pandigitalPrime())
