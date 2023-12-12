const app = require("express")();
const dotenv = require("dotenv");
const morgan = require("morgan");

//the config file
dotenv.config({ path: "./config.env" });

//Display the request data in the console
app.use(morgan("dev"));

// ##### Starting the app ##### //
app.listen(process.env.PORT, () => {
	console.log(`The app is running on port ${process.env.PORT}`);
});
