// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.

const specialPythagoreanTriplet = () =>{
    for(let a = 1; a < 1000;a++){
        for(let b = a; b < 1000;b++){
            c = 1000 - a - b
            if(a**2 + b**2== c**2){
                return a*b*c
            }
        }
    }
}

console.log(specialPythagoreanTriplet())
