// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number?

const prime10001 = () => {
    let primeNumbers = [2];
    let primeNumber = 1;
    let i = 3;
    let j = 0;
    while(primeNumber !== 10001){
        if(i % 2 !== 0){
            if(isPrime(primeNumbers,i)){
                primeNumbers.push(i)
                primeNumber++;
            }
        }
        i++;
    }

    return primeNumbers[primeNumbers.length -1]
}

const isPrime = (primeNums,numInQuestion)=>{
    let i = 0;
    while(i !== primeNums.length-1){
        if(numInQuestion % primeNums[i]  === 0){
            return false;
        }
        i++;
    }
    return true;
}

console.log(prime10001())
