// Print the country that uses US dollars as currency

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();
let responseObject;

xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        responseObject.forEach(country => {
            for (const currencyCode in country.currencies) {
              if (country.currencies[currencyCode].symbol === '$') {
                console.log(country.name.common);
              }
            }
          });
    }
  };
xhr.send();