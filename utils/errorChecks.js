const isCurrency = require('./isCurrency')

function errorChecks(args){

    const date = args[2];
    const bCurrency = args[3];
    const bAmount = parseInt(args[4]);
    const cCurrency = args[5];

    if(args.length != 6){
        console.log("Usage Error: Incorrect amount of arguments");
        process.exit(1);
    }
    if(!(/^\d{4}[\-.]\d{1,2}[\-.]\d{1,2}$/.test(date))){
        console.log("Usage Error: "+ date +" is not a date");
        process.exit(1);
    }
    isCurrency(bCurrency).then(output => {
        if(!output) {
            console.log("Usage Error: " + cCurrency + " is not a currency.");
            process.exit(1);
        }
    });
    if(isNaN(bAmount)){
        console.log("Usage Error: " + bAmount + " is not a number.");
        process.exit(1);
    }
    isCurrency(cCurrency).then(output => {
        if(!output){
            console.log("Usage Error: " + cCurrency + " is not a currency.");
            process.exit(1);
        }
    });

}

module.exports = errorChecks;