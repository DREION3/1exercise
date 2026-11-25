 
// Instructions:
// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply
//all 3 numbers together. Note: The argument passed must NOT be the same number.  
//fuction called  multiply with 3 parameters

function multiply(a, b, c) {
  return a * b * c;
}

console.log( multiply(5, 5, 5));

//function convertToSeconds (38) {
//    return "2280 seconds"
//}

// TODO: Create a function expression called ‘convertToSeconds’ that takes in a
//number of minutes as an argument and returns the amount in seconds. ***Do not
//use a console.log() inside of the function***
//funtion expression
const convertToSeconds = function(minutes) {
  return minutes * 60;
};

console.log(convertToSeconds(67))


// TODO: Create a function called fahrenheitToCelsius that takes the temperature as
//an parameter and returns the equivalent temperature in Celsius. ***Do not use a
//console.log() inside of the function***
//farenheittocelsuis

function farenheitToCelsius (temperature){
    return (temperature - 32) * 5/9

}
//console.log(farenheitToCelsius(67))
//}

// TODO: Create a function that takes a string as a parameter and returns the reverse
//of the string. ***Do not use a console.log() inside of the function ***
//reverse string

function reverseString(str) {
  let reversed = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  
  return reversed;
}

console.log(reverseString("Dreion")); //out put  noierD

// TODO: Create a function that takes in a string and returns the number of Vowels in
//the sentence. E.g. countVowels(‘Javascript’) //output =3
//console.log() inside of the function***

function countVowels(str) {// countvowels fuhnction
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']); // set out the vowels 
  let count = 0; // starts counting from 0 not one

  for (const char of str.toLowerCase()) {
    if (vowels.has(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Dre'ion")); 


// TODO: Create a “isPrime” function that takes a number as a parameter and returns
//true if the number is prime, and false otherwise. Make sure to test your code with 4
//numbers

//function isPrime( number  ) {
  //  return(isPrime(number))
//}


function isPrime(num) {
  // Prime numbers must be greater than 1
  if (num <= 1) {
    return false;
  }

  // Loop from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If num is divisible by any number other than 1 and itself, it's not prime
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Testing the function with 4 numbers
console.log("Is 1 prime?", isPrime(1));   // false 
console.log("Is 2 prime?", isPrime(2));   // true
console.log("Is 11 prime?", isPrime(11)); // true 
console.log("Is 15 prime?", isPrime(15)); // false 