const request = require('request-promise');

function getExchangeRate(date, bCurrency, bAmount, cCurrency){
    const options = {
        method: 'GET',
        uri: 'https://api.exchangeratesapi.io/'+date+'?base='+bCurrency,
        json: true
    }

    return request(options).
    then(function (response){
        exRate = response.rates[cCurrency]
        cAmount = (exRate) * bAmount;  //conversion rate * base amount

        const output = {
            date: date,
            base_currency: bCurrency,
            base_amount: bAmount,
            conversion_currency: cCurrency,
            conversion_amount: Math.round(cAmount * 100) / 100
        }

        return output;
    }).
    catch(function (err){
        console.log(err)
    })
}

module.exports = getExchangeRate;