let word="welcome to orange";
let wordUpper=word.toUpperCase();
console.log(wordUpper);

let me1="welcome to orange";
let me2=me1 .slice(8,11);
console.log(me2.toUpperCase());

 let me3=me1.replace("welcome to","Hello from");
 console.log(me3);

 let me4=me1.toLowerCase();
 console.log(me4);

 console.log(me1.length);

 let me5=me1.replace("orange",'"orange"');
 console.log(me5);

 let me6=" Jordan"
 let me7= me1.concat(me6);
 console.log(me7);

 let me8="cactus";
 let me9=me8[0];
 let replace=  me9;
 for (let j=1; j<me8.length ; j++) {
    if (me8[j] == me9 ){
      replace += " * " }
      else{
        replace += me8[j]
      }}

;
 console.log(replace);

 

