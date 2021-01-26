// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const smallestMultiple = () => {
    let multiple = 1;
    let smallMultiple;
    let number = 0
    
    while(true){
        while(number < 21){
            if(multiple % number !== 0){
                break;
            }
            number++;
        }
        if(number > 20){
            smallMultiple = multiple
            break;
        }
        multiple++;
        number = 1
    }
    return smallMultiple;
};


console.log(smallestMultiple())
