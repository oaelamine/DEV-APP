const mongoose = require("mongoose");

const reportingShema = new mongoose.Schema({
	clientName: {
		type: String,
		required: [true, "provide the name of the client"],
	},
	reportingDate: {
		type: Date,
		required: [true, "provide a reporting date"],
	},
	startDate: {
		type: Date,
		required: [true, "provide a starting date"],
	},
	endDate: {
		type: Date,
		required: [true, "provide a ending date"],
	},
	websiteType: {
		type: String,
		required: [true, "provide the type of the website"],
		enum: {
			values: ["vitrine", "e-commerce", "personaliser"],
			message: "the type do not exists",
		},
	},
	clientContact: {
		type: String,
		required: [true, "provide the type of the website"],
		enum: {
			values: ["appele téléphonique", "email", "whatsup", "message"],
			message: "provide a contact option",
		},
	},
	clientAppointment: {
		type: String,
		required: [true, "provide a option"],
		eneum: {
			values: ["oui", "non"],
			message: "this value do not exists",
		},
	},
	websiteState: {
		type: String,
		enum: {
			values: ["encoure", "modification", "en instance", "validée"],
			message: "state do not exists",
		},
	},
	comments: {
		type: String,
	},
});

websiteSchema.pre("save", function () {
	this.reportingDate = new Date(date.now());
});

module.exports = mongoose.model("Reporting", reportingShema);
