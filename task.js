// Get all the countries with a population of less than 2 lakhs using Filter function



const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

let responseObject;

xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        Object.entries(responseObject).forEach(([key, value]) => {
            console.log('name : ' + responseObject[key]['name']['common']);
            console.log('capital :' + responseObject[key]['capital']);
            console.log('flag :' + responseObject[key]['flag']);
            console.log('----------------------------------------------------------------')
        });
    }
  };
xhr.send();


// Get all the countries from Asia continent /region using Filter function

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        const asianCountries = countries.filter(responseObject => responseObject.region === 'Asia');
        console.log(asianCountries);
    }
  };
xhr.send();



