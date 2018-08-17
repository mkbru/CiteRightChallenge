const request = require('request-promise');
const getCurrencies = require('./getCurrencies')

function isCurrency(currency){

    return getCurrencies().then(currencies => {
        let isCurrency = currencies.includes(currency);
        return isCurrency;
    });

}

module.exports = isCurrency;