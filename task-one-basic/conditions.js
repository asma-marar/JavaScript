let yearOfBirth=1970;
let age= 2024 - yearOfBirth;

if ( age >= 60 ){
    console.log("You may join the seniors’ program");
} else if (age >= 30 ){
    console.log("You are not eligible. You may join other programs");
  } else if ( 18>age || age<30){
    console.log("You are eligible. Start your application");}
    else {
        console.log("You may join the kids' program");
    };



    function case2(upTOlo){
        let val=upTOlo.split("");
        let storage=" ";
        for( let k=0; k < val.length ; k++ ){
            if (val[k] === val[k].toUpperCase()){
                storage += val[k].toLowerCase();
            }
            else {
                storage += val[k].toUpperCase()
            ;}
            
            
           
        } 
        return storage;
    }

console.log(case2("OrAnGe"));


function cap(change){
    let step11=change.split(" ");
    let step22=" ";
    for(i=0; i< step11.length; i++){
        let step33= step11[i][0].toUpperCase() + step11[i].slice(1);
        step22 += step33 ;
    }

    return step22;
}
  
console.log(cap("Coding Academy by Orange"));


function remo(specific, element) {
    let sum30 = [];
    for (let i = 0; i < specific.length; i++) {
        if (specific[i] !== element) {
            sum30.push(specific[i]);
        }
    }
    return sum30;
}

console.log(remo(["Coding", "Academy", "By", "Orange"], "By"));


function odd1(num1){
    if ( (num1 % 2)   === 0){
        console.log("even");

    } else {
        console.log("odd");
    }
}

odd1(255);

function check1(type1){
    let type2=typeof (type1);
if ( type2 === "number"){
    console.log("number");
}else{
    console.log("not a number");
}
}

check1("string");

function find(num11,num22){
    if (num11 > num22){
        console.log(num11, "is the largest")
    } else {
        console.log(num22, "is the largest")

    }
}

find(5, 20);

//range from 40 to 70
function take(num44){
    if (num44>40  && num44<70){
        console.log("present");
    }else {
        console.log("not present");
    }
}
take(50);




