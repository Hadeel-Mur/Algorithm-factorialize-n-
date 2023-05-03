// // Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 



// Pseudocode
// 1- declare a function 'factorialize(n)' which computes the factorial of an integer n using recursive calls.
// 2- declare a variable 'n' with value  5 
// 3- we call the fanction with 'n' as argument and store the result in a variable result
 



// coding

function  factorialize(n){
    if ( n === 0 || n === 1 ){
        return 1
    } else {
        return n *factorialize(n-1)
    }
}
    
    let n = 5;
    let result =factorialize(n);
    console.log(`The factorial of ${n} is ${result}.`);


// Diagram
// 1- if n = 0 || n =1 return 1 
// 2- otherwise multiply 'n' with the factorialize - 1 by calling the fanction with n-1 as argument
// 3- will repeat till n reaches 0 or 1, which was the first point
// 4- here n = 5 so the function will computes 5 *4 *3 *2 *1 
// 5- then the result will be 120