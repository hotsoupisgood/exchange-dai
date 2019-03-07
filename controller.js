var mongoose = require('mongoose');
require('./model');
KeyStore = mongoose.model('KeyStore');

exports.addAccount = function(key) {
	return KeyStore.create( {
		address: key.address,
		privateKey: key.privateKey,
		signTransaction: key.signTransaction,
		sign: key.sign,
		encrypt: key.encrypt
	})
		.then(result => {
			return result
		})
		.catch(err => {
			console.log(err)
		})
}
exports.getAccount = function(addressToFind) {
	return KeyStore.find( {
		address: addressToFind
	})
		.then(result => {

		})
		.catch(err => {
			console.log(err)
		})
}
exports.getAllAccounts = function() {
	return KeyStore.find({})
}
