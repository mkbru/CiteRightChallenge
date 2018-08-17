const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;
const getExchangeRate = require("../utils/getExchangeRate");

chai.use(chaiHttp);

describe("First test", () => {
	it("Should assert true to be true", () => {
		expect(true).to.be.true;
	});
});

describe("Test if API is running",() =>{
	it("Should assert to true", (done) => {
		chai.request("https://api.exchangeratesapi.io")
			.get('/latest')
			.end((err,res) => {
				expect(res).to.have.status(200);
				done();
			});
	});

});


describe("getExchangeRate()_unit-test-1", () =>{
	it("should assert true if obj1 === obj2", (done) => {
		const date = "2011-06-03";
		const base_currency = "USD";
		const base_amount = 100;
		const conversion_currency =  "CAD";


		const obj1 = {
			date: "2011-06-03",
			base_currency: "USD",
			base_amount: 100,
			conversion_currency: "CAD",
			conversion_amount: 97.85,
		};

		getExchangeRate(date,base_currency,base_amount,conversion_currency).
			then(obj2 => {
				expect(obj1).to.eql(obj2);
				done();

			}).
			catch(error => {
				done(error);
			});
	});
});

describe("getExchangeRate()_unit-test-2", () =>{
	it("should assert true if obj1 === obj2", (done) => {
		const date = "2007-07-12";
		const base_currency = "GBP";
		const base_amount = 303;
		const conversion_currency =  "SEK";


		const obj1 = {
			date: "2007-07-12",
			base_currency: "GBP",
			base_amount: 303,
			conversion_currency: "SEK",
			conversion_amount: 4085.015
		};

		getExchangeRate(date,base_currency,base_amount,conversion_currency).
			then(obj2 => {
				expect(obj1).to.eql(obj2);
				done();

			}).
			catch(error => {
				done(error);
			});
	});
});

describe("getExchangeRate()_unit-test-3", () =>{
	it("should assert true if obj1 === obj2", (done) => {
		const date = "2004-08-07";
		const base_currency = "EUR";
		const base_amount = 5;
		const conversion_currency =  "PLN";


		const obj1 = {
			date: "2004-08-07",
			base_currency: "EUR",
			base_amount: 5,
			conversion_currency: "PLN",
			conversion_amount: 22.01,
		};

		getExchangeRate(date,base_currency,base_amount,conversion_currency).
			then(obj2 => {
				expect(obj1).to.eql(obj2);
				done();

			}).
			catch(error => {
				done(error);
			});
	});
});

describe("getExchangeRate()_unit-test-4", () =>{
	it("should assert true if obj1 === obj2", (done) => {
		const date = "2017-02-09";
		const base_currency = "ZAR";
		const base_amount = 132;
		const conversion_currency =  "TRY";


		const obj1 = {
			date: "2017-02-09",
			base_currency: "ZAR",
			base_amount: 132,
			conversion_currency: "TRY",
			conversion_amount: 36.3528,
		};

		getExchangeRate(date,base_currency,base_amount,conversion_currency).
			then(obj2 => {
				expect(obj1).to.eql(obj2);
				done();

			}).
			catch(error => {
				done(error);
			});
	});
});