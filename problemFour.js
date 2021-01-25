// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const largestPalindromeProduct = () => {
    let largestThreeDigitPalindrome =0;
    let notReversed;
    let reversed;

    for(let i = 100; i < 1000;i++){
        let j = 1
        while(j < 1000){
            product = i * j;
            notReversed = product.toString()
            reversed = notReversed.split('').reverse().join('')
            if(notReversed == reversed){
                if(parseInt(largestThreeDigitPalindrome) < product){
                    largestThreeDigitPalindrome = reversed;
                }
            }
            j++;
        }
    }
    return largestThreeDigitPalindrome;
}

console.log(largestPalindromeProduct())
