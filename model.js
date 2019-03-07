var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var KeyStoreSchema = new Schema( {
	address: String,
	privateKey: String,
	signTransaction: Object,
	sign: Object,
	encrypt: Object
});
mongoose.model('KeyStore', KeyStoreSchema);
