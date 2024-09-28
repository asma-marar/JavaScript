//1
function findSmallest(sumArray) {
    let smallest = sumArray[0]; 

    for (let i = 1; i < sumArray.length; i++) {
        if (sumArray[i] < smallest) {
            smallest = sumArray[i]; 
        }
    }

    return smallest; 
}

console.log(findSmallest([30, 45, 60, 7])); 


//2 
function AlphabeticalOrder(str) {
    return str.split('').sort().join('');
}

console.log(AlphabeticalOrder('hello'));

//3
function countWords(sentence){
    asmaa=sentence.split(" ");
    console.log(asmaa.length);

}
countWords('hello from CodingAcademy!'); 

//4
function MultiplyByLength(three){
  let hm=[];
  for(i=0 ; i< three.length ;i++){
    hm1= three[i]*(three.length)
    hm.push(hm1); 
  }
  console.log(hm);
}
MultiplyByLength([4, 2, 5] );

//5
function doubleChar(change){
    let sumOff= " ";
    for (i=0; i< change.length; i++){
        sumOff += change[i].repeat(2);
    }
    console.log(sumOff)
}
doubleChar('Coding');