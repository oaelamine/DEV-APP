const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userShema = new mongoose.Schema({
	userFirstName: {
		type: String,
		required: [true, "the user need a First name"],
		maxlength: [30, "no more then 30 letters"],
		minlength: [4, "no less then 4 letters"],
		unique: true,
	},
	userLastName: {
		type: String,
		required: [true, "the user need a last name"],
		unique: true,
	},
	email: {
		type: String,
		required: [true, "the user need an Emain"],
		unique: true,
		lowercase: true,
		validate: [isEmail, "please provide a valide email"],
	},
	role: {
		type: String,
		enum: {
			values: ["dev", "tl", "devtl"],
			message: "this role do not exists",
		},
	},
	password: {
		type: String,
		required: [true, "the user need a password"],
	},
	passwordConfirm: {
		type: String,
		required: [true, "the user need a password"],
		validate: {
			validator: function (el) {
				return el === this.password;
			},
			message: "the passwordConfirm dos not matche the password",
		},
	},
});

//haching the password
userShema.pre("save", async function () {
	this.password = await bcrypt.hash(this.password, 12);
	this.passwordConfirm = undefined;
});
const Users = mongoose.model("Users", userShema);

module.exports = Users;
