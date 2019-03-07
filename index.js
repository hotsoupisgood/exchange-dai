const fs = require('fs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
});
var Tx = require('ethereumjs-tx')
var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545/'))
keyStore = require('./controller')
newAccount=web3.eth.accounts.create()
keyStore.addAccount(newAccount).then(function(result) {
	console.log(result)
})
var abiArray=require('./abi')
var daiContractAddress='0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359'
create=function() {
	newAccount=web3.eth.accounts.create()
	console.log(newAccount)
	fs.writeFile("accounts.json", newAccount, function(err) {
		if(err) {
			return console.log(err);
		}

		console.log("The file was saved!");
	}); 
}
//console.log(accounts);
//web3.eth.defaultAccount='9ce52b190a99900341d04d66a62ee8e957b89ad7'
//console.log(web3.eth.defaultAccount)

exports.send = function(fromAddress, toAddress){
	var contract=new web3.eth.Contract(abiArray, daiContractAddress, {from: fromAddress})
	var rawTransaction = {"from":myAddress, "gasPrice":web3.utils.toHex(2 * 1e9),"gasLimit":web3.utils.toHex(210000),"to":contractAddress,"value":"0x0","data":contract.methods.transfer(toAddress, amount).encodeABI(),"nonce":web3.utils.toHex(count)} 
	var transaction = new Tx(rawTransaction)
	transaction.sign(privateKey)

	web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))

	// check the balance
	contract.methods.balanceOf(myAddress).call().then(function(balance){console.log(balance)})
}
