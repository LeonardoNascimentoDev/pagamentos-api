const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect(
	'mongodb+srv://leo:@leo2012@empresasapp.yn1uq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.json({ limit: '50mb' }));

app.listen(3333);

module.exports = { app };
