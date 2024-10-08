let pokiurl="https://github.com/PokeAPI";
fetch(pokiurl).then(response=>
        {
            return response.json();}
    ).then(banana=>{
       console.log(banana);
       const result=banana.abilities;
       console.log(result);

       result.forEach(element => {

        console.log( element.ability);

       });
        let name=result.MakeName;
        let machine=result.VehicleTypeName;
        console.log(name,machine);

    })