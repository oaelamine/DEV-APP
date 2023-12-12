const mongoose = require("mongoose");

const websiteSchema = new mongoose.Schema({
	ClientName: {
		type: String,
		required: [true, "provide a name please"],
	},
	websiteBisEmail: {
		type: String,
		required: [true, "provide a BIS Email please"],
		validate: [isEmail, "provide a valide Email please"],
	},
	clientOffer: {
		type: String,
		required: [true, "provide a offer name"],
	},
	websiteDonne: {
		type: Boolean,
		default: false,
	},
	canvaLink: {
		type: String,
	},
});

module.exports = mongoose.model("Website", websiteSchema);
