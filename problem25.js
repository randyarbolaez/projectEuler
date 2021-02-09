// The 12th term, F12, is the first term to contain three digits.
// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

const fibonacciNumber = () => {
    let a = BigInt(1);
    let b = BigInt(1);
    let i = 2;
    let total = BigInt(0);
    while(true){
        console.log(total)
        if(total.toString().length == 1000){
            return i;
        }
        total = BigInt(a+b);
        a = BigInt(b);
        b = BigInt(total);
        i++;
    }
};

console.log(fibonacciNumber())
