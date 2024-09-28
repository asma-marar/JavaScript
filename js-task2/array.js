//1
let Input2= [1, 2, 3];
let Input3= [4, 5, 6]; 
let all=Input2.concat(Input3);
console.log(all);


//2
let Input4= [[1, 2, 3, 4, 5, 6], 2, 4];
let Input5=Input4[0].slice(0,2) ;
let Input6=Input4[0].slice(4,6);
let all1=Input5.concat(Input6);
console.log(all1);

//3
let Input7= [[1, 2, 3, 4, 5], 3];
let Input8=Input7[0].splice(1,1);
let Input9=Input8.splice(1,-1);
let Input10=Input8.concat(Input9);
console.log(Input10);


//4
let task= [1, 2, 3, 4, 5];
let value2=[];
for(i=0 ; i< task.length ; i++){
    value2 += task[i] + ",";
   
}

console.log(value2);

//5
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num);
});

let updatedNumbers = [...numbers, 6];
console.log(updatedNumbers);




