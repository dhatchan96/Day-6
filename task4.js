// Print the total population of countries using reduce function

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();
let responseObject;

xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        const totalPopulation = responseObject.reduce((accumulator, obj) => {
            return accumulator + obj.population;
          }, 0);
        console.log(totalPopulation);
    }
  };
xhr.send();