const {countriesData} = require('./data')
const fs = require("fs");
const { config } = require('process');

countriesData.forEach((element,index) => {
    delete element.idd;
    delete element.altSpellings;
    delete element.translations;
    delete element.latlng;
    delete element.demonyms;
    delete element.flag;
    delete element.maps;
    delete element.gini;
    delete element.car;
    delete element.flags;
    delete element.coatOfArms;
    delete element.capitalInfo;
    delete element.postalCode;
    delete element.landlocked;
    delete element.borders;
    delete element.area;
    delete element.fifa;
    delete element.tld;
    console.log(`${index+1}: Completed`)
});

function compareStrings(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

countriesData.sort(function (a, b) {
    return compareStrings(a.name.common, b.name.common);
})

// console.log(countriesData)


fs.writeFile("countries.json", JSON.stringify(countriesData), (err) => {
    if (err) throw err;
    console.log("Completed!");
 });