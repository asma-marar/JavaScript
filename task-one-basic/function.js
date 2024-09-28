function convert(str){
    let array1=str.split(" ");
    console.log(array1);

}
convert("orange jordan");

function number(...numbers){
    let hidden=" ";
    for (let j=0 ; j<=9 ; j++){
    if(j <= 6){
        hidden += " * ";}
    else {
        hidden += numbers[j];
    }
    }
    console.log(hidden);
};

number(0,7,8,6,8,9,2,0,2,6);


function email(...letters){
    let mailName=" ";
    for (let j=0 ; j<=letters.length ; j++){
    mailName += letters[0] ;
   console.log ("orange"+mailName+"@orange.com");
   return;
}
};

email("asmaa.murar");


function upperCase1(input) {
    let sentence = input.split(" ");
    let wordString = ""; 
    for (let i = 0; i < sentence.length; i++) { 
        if (sentence[i]) {
            let me22 = sentence[i][0].toUpperCase() + sentence[i].slice(1);
            wordString += me22 + " "; 
        }
    }
    return wordString.trim(); 
}

console.log(upperCase1("orange coding academy"));



function flip(numbers2) {
    let result2 = "";
    const numStr = numbers2.toString(); 
    for (let i = 0; i < numStr.length; i++) { 
        let add = numStr[numStr.length - 1 - i]
        result2 += add;
    }
    return result2;
}

console.log(flip(92485)); 

function swap(a,b){
    let c=a;
    let f=b;
    console.log("a=" + b,"b=" + a)
}
swap(3,4);


function removeCharacter(str, index) {
    // Check if index is valid
    if (index < 0 || index >= str.length) {
        return "Invalid index";
    }
    
    // Remove the character at the specified index
    return str.slice(0, index) + str.slice(index + 1);
}

// Sample Input
const result = removeCharacter("Orange", 3);
console.log(result); // Output: "Orage"


function merge(str1,str2){
    let str3=str1.slice(1);
    let str4=str2.slice(1);
    let str5=str3.concat(str4);
    console.log(str5);
}
merge("lora","inge");


function convert1(zoom){
    flow=zoom.split(" ");
    console.log(flow);
}

convert1("Coding Academy by Orange");

