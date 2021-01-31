// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

const summationOfPrimes = () => {
    let allPrimes = [2];
    let i = 3;
    let total = 2;
    while(i !== 2000001){
        if(i % 2 !== 0){
            if(isPrime(allPrimes,i)){
                allPrimes.push(i)
                total += i;
            }
        }
        i++;
    }
    
    return total
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

console.log(summationOfPrimes())
