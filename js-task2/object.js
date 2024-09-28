//1
user= {name:"Adam", age:25};
user.gender = "male";
console.log(user);

//2
let user2=user.name;
let user3=user.age;
let user4=user.gender;
let user5=[];
user5.push(user2,user3,user4);
console.log(user5);

//3
let obj = { name: "Adam", age: 25, gender: "male" };
let keyValuePairs = Object.entries(obj);

console.log(keyValuePairs); 


//4
let obj1 = { name: "Adam", age: 25 };
let obj2 = { gender: "male" };

let mergedObj = Object.assign({}, obj1, obj2);

console.log(mergedObj);

//5
/*let obj2= { name: "Adam", age: 25 };

Object.seal(obj2);


obj2.gender = "male"; 
obj2.name = "Eve"; 
obj2.age = 30; 
console.log(obj2);*/


