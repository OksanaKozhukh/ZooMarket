const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require("./db");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//const nodeMailer = require('nodemailer');

app.use("/", express.static(path.join("public")));

// Routes for /animals
app.use("/animals", require("./modules/animals/animals.routes"));

// Routes for /orders
app.use('/orders', require('./modules/orders/orders.routes'));

// Routes for /pagination
app.use("/page", require("./modules/pagination/pagination.router"))

app.use("/send-order")


sequelize.sync({ alter: true });

// Start local server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Server is started on portn ${PORT}...`);

});