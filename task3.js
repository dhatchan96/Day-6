// Get all the countries with a population of less than 2 lakhs using Filter function

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();
let responseObject;

xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        const asianCountries = responseObject
        .filter(responseObject => responseObject.population < 200000)
        .map(responseObject => responseObject.name.common);
        console.log(asianCountries);
    }
  };
xhr.send();