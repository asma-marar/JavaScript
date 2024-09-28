"user instrict"


//1
function mu(me){
    let count=0;
    for (i=0; i<24; i++){
    count += me;
    
    }
    console.log(count);
}
mu(5);

//2
function fibonacci(max) {
    let a = 0, b = 1;
    let output = "";

    for (let i = 0; a <= max; i++) {
        output += a + " ";
        let next = a + b;
        a = b;
        b = next;
    }

    return output.trim(); // Trim to remove trailing space
}

console.log(fibonacci(10));

//3
function primary(prime) {

let sum2 = ""; // Initialize as an empty string
    if (prime >= 2) { // Start checking from 2 since 0 and 1 are not prime
        for (let i = 2; i <= prime; i++) {
            let isPrime = true; // Assume i is prime
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isPrime = false; // Not prime
                    break;
                }
            }
            if (isPrime) {
                sum2 += i + " "; // Append the prime number
            }
        }
    }
    console.log(sum2.trim()); // Trim to remove trailing space
}

primary(20);

//4
function conVert(mIan){
    let sum3=mIan.toString();
    let sum4=" ";
    for(i=0; i< sum3.length ; i++){
             sum4 += sum3[i];
        }  
    
    console.log(sum4);
}
conVert( [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

//4
let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let output = "";

for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        output += array2D[i][j] + " ";
    }
}

console.log(output.trim());

//5
let Input = [1, 2, 3, 4, 5];
let reverse = [];

for (let i = Input.length - 1; i >= 0; i--) {
    reverse.push(Input[i]); // Add elements to the new array
}

console.log(reverse.join(" ")); 