const {countriesData} = require('./data')
const fs = require("fs");

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


fs.writeFile("c.json", JSON.stringify(countriesData), (err) => {
    if (err) throw err;
    console.log("Completed!");
 });