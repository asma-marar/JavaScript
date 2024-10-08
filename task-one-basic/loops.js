//1 for
function odd1(num66){
    for (i=1 ; i<= 50 ;i++){
    if ( (num66 % 2)   === 0){
        let num55=num66 + " " + num66;
        console.log(num55);

    } else {
        console.log("odd");
    }}
}

odd1(45);

//1 while
let j=1;
while (j<= 50){
    if ( (j % 2)   === 0){
        let num55=j + " " + j;
        console.log(num55);

    } 
    j ++;
}

//2 for
for (i=1 ; i<= 50 ;i++){
    if ( (i % 2)   === 0){
        let num55=i + " " + i;
        console.log(num55);}}


//3
let k=1;
while (k<= 50){
    if ( (k % 2)   === 0){
        let num88=k + " " + "even";
        console.log(num88);

    } else {
        num77=k + " " + "odd"
        console.log(num77);
    }
    k ++;
}
//4
for (i=1; i<=100 ; i++){
    if (((i % 3) === 0) && ((i % 5) === 0)){
        console.log("FizzBuzz")}

    else if ((i % 3) === 0){
        console.log("Fizz")
    }else if ((i % 5) === 0){
        console.log("buzz")
    } 
    else {
        console.log(i)
    }
}

//6
function fizzBuzz(n) {
    if (n > 0) {
        fizzBuzz(n - 1);
        if (n % 3 === 0 && n % 5 === 0) {
            console.log("FizzBuzz");
        } else if (n % 3 === 0) {
            console.log("Fizz");
        } else if (n % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(n);
        }
    }
}

fizzBuzz(30);

//7
function certain(amount, banknotes) {
    let result = [];
    
    for (let i = 0; i < banknotes.length; i++) {
        while (amount >= banknotes[i]) {
            amount -= banknotes[i];
            result.push(banknotes[i]);
        }
    }
    
    return result.join(", ");
}

console.log(certain(57, [25, 10, 5, 1]));

//8
function compartive(sent2,specific2){
    let new55=0;
    for(let i=0; i < sent2.length; i++){
            if (sent2[i] === specific2){
                new55++;
            }}
        
    
    return new55;
}
console.log(compartive("Coding Academy by Orange","o"));

function comparitive(sent2, specific2) {
    let count = 0; // Use a counter variable
    for (let i = 0; i < sent2.length; i++) {
        if (sent2[i] === specific2) {
            count++; // Increment the count
        }
    }
    return count;
}

console.log(comparitive("Coding Academy by Orange", "o")); // Output: 2


//9
for (i=0 ;i<20; i++)