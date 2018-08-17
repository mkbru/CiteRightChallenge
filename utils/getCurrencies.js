const request = require('request-promise');


function getCurrencies(){
    const options = {
        method: 'GET',
        uri: 'https://api.exchangeratesapi.io/latest',
        json: true
    }


    return request(options).
    then(function (response){

        let currencies = [];
        for(let k in response.rates) currencies.push(k);

        return currencies;

    }).
    catch(function (err){
        console.log(err)
    })
}

module.exports = getCurrencies;