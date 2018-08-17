const errorChecks = require("./utils/errorChecks");
const getExchangeRate = require("./utils/getExchangeRate");

const args = process.argv;
const date = args[2];
const bCurrency = args[3];
const bAmount = parseInt(args[4]);
const cCurrency = args[5];

//user input validation
errorChecks(process.argv);

getExchangeRate(date, bCurrency, bAmount, cCurrency).then(output =>{
	console.log(output);
});

