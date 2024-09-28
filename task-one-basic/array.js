
let first3 = ["Coding", "Academy","By","Orange"];
let first4 = first3.push("jordan");
console.log(first3);

first3.length=2
console.log(first3);

let first6=["Coding", "Academy","By","Orange"];
let first5=first6.unshift("welcome","to")
console.log(first6)

let first7= ["Coding", "Academy","By","Orange"];
let first8=first7.shift();
console.log(first7)

let first9= ["Coding", "Academy","By","Orange"];
let first10=first9.join(' ');
console.log(first10);

let first11= ["Coding", "Academy","By","Orange"];
let first12=first11.splice(1,2);
console.log(first11);


//2 fruits
var fruit = ["banana", "apple", "orange", "watermelon"];

var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

let veg= vegetables.pop();
console.log(vegetables);


let fr= fruit.shift();
console.log(fruit);


var fruit1 = ["banana", "apple", "orange", "watermelon"];
let fruit2=fruit1.indexOf("orange");
console.log(fruit2);
let fruit3=fruit1.push(fruit2);
console.log(fruit1);

var vegetables1 = ["carrot", "tomato", "pepper", "lettuce"];

let vegetables2=vegetables1.length;
console.log(vegetables2);

let vegetables3=vegetables1.push(vegetables2);

console.log(vegetables1);

var fruit7 = ["banana", "apple", "orange", "watermelon"];
var vegetables7 = ["carrot", "tomato", "pepper", "lettuce"];

let food=fruit7.concat(vegetables7);
console.log(food);

let food1=food.splice(4,2);
console.log(food);

console.log(food.reverse());

console.log(food.join(" "));

