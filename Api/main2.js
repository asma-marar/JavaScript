'use strict'


let apiURL="https://restcountries.com/v3.1/all";   //url

fetch(apiURL).then(response=>
    {
        return response.json();}

).then(data=>{
console.log(data);
const countryList = document.getElementById('country-list');

                data.forEach(country => {
                    const listItem = document.createElement('li');

                    // Create an image element for the flag
                    const flagImg = document.createElement('img');
                    flagImg.src = country.flags.png; // Get the PNG flag
                    flagImg.alt = `Flag of ${country.name.common}`;

                    // Set the text for the list item
                    const textNode = document.createTextNode(`Name: ${country.name.common}`);

                    // Append the flag and text to the list item
                    listItem.appendChild(flagImg);
                    listItem.appendChild(textNode);

                    // Append the list item to the country list
                    countryList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

