'use strict'


let apiURL="https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json";//url

fetch(apiURL).then(response=>
    {
        return response.json();}
).then(banana=>{
console.log(banana);
const result=banana.Results;
console.log(result);

Object.keys(result).forEach(key=> {
    let body=document.querySelector("body");
    let div=document.createElement("div");
    let p1=document.createElement("p");
    let p2=document.createElement("p");
    body.appendChild(div);
    div.appendChild(p1).textContent=result[key].MakeName;
    div.appendChild(p2).textContent=result[key].VehicleTypeName;

    
    
})
})

