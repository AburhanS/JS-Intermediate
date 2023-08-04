/* function specialSumFinder(){
    let sum = 0
    for(let i = 200; i <= 2700; i++){
        if ((i % 3 === 0 || i % 5 === 0) && i % 15 != 0){ // If i is divisible by 3 or 5, but not by 15
        sum = sum + i // Add i to sum
        }
    }
    console.log(sum);
};

specialSumFinder() */



/* const x = [2, 1, 6, 4, -7];

function shiftArray(array){
    for(let i = array.length - 1; i>0; i--){ // loop from the last index of the array to the second index
        let temp = array[i]; // declare a variable called temp and assign it to the current element of the array
        array[i] = array[i - 1] // assign the previous element of the array to the current element
        array[i - 1] = temp // assign temp to the previous element of the array
    }
    return array
}

console.log(shiftArray(x)); */



/* const x = [];

function fizzBuzz(array){
    for(let i = 1; i<136; i++){
        if(i % 3 != 0 && i % 5 != 0){ // if i is not divisible by 3 or 5
            array.push(i); // add i to the array
        } else if (i % 3 == 0 && i % 5 != 0){ // else if i is divisible by 3 but not by 5
            array.push("Fizz"); // add "Fizz" to the array
        } else if (i % 5 == 0 && i % 3 != 0){ // else if i is divisible by 5 but not by 3
            array.push("Buzz"); // add "Buzz" to the array
        } else if (i % 15 == 0){ // else if i is divisible by 15
            array.push("FizzBuzz"); // add "FizzBuzz" to the array
        }
    }
    return array
}

console.log(fizzBuzz(x)) */



/* let curr = 1; // current value in the Fibonacci sequence
let prev = 0; // previous value in the Fibonacci sequence
let total = 0; // sum of all the values

for (let i = 0; curr < 1000000; i++) { // loop until curr is less than 1 million
  total += curr; // add curr to the total
  let next = curr + prev; // calculate the next value in the Fibonacci sequence
  prev = curr; // update prev to be curr
  curr = next; // update curr to be next
}

console.log(total); // print the total */



/* const x = [1, -2, 4, 1];

function negativeRemover(array){
    for(let i = array.length - 1; i >= 0; i--){ // loop from the end to the start
        if(array[i] < 0){ // if the element is negative
            array.splice(i, 1); // remove it
        } else console.log(array[i]); // else print the element
    }
};

negativeRemover(x); */



/* const x = ["man", "I", "Love", "The", "Matrix", "Program"];

function cencorAdder(array, n){
    let i = "*".repeat(array[n].length); // use array[n] to access the element at the index n
    array.splice(n, 1, i); // replace the element with stars

    console.log(array);
};

cencorAdder(x, 5); */