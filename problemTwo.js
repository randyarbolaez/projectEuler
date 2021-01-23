// Each new term in the Fibonacci sequence is generated by adding the previous two terms.
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const evenFibonacciNumbers = () =>{
    let second = 0;
    let first = 1;
    let sumForEven = 0;
    let sum=0;
    while(sum <= 4000000){
        if((sum % 2) === 0){
            sumForEven += sum;
        }
        sum = second + first;
        second = first;
        first = sum;
    }
    return sumForEven;
}

console.log(evenFibonacciNumbers())
