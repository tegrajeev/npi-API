const express = require('express');
const bodyParser = require('body-parser');  
const app = express(); 
var routes = require('./routes/routes'); 

const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json')

// const options = {
// 	definition: {
// 		openapi: "3.0.0",
// 		info: {
// 			title: "Library API",
// 			version: "1.0.0",
// 			description: "A simple Express Library API",
// 		},
// 		servers: [
// 			{
// 				url: "http://localhost:3030",
// 			},
// 		],
// 	},
// 	apis: ["./routes/*.js"],
// };

// const specs = swaggerJsDoc(options);

app.use(function (req, res, next) {  
res.header("Access-Control-Allow-Origin", "*");  
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
res.header('Access-Control-Allow-Methods', 'PUT, POST,PATCH, GET, DELETE, OPTIONS');  
next();  
});  
app.use(bodyParser.urlencoded({extended:true} ));  
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use('/', routes);

const userRoutes=require('./routes/userRoutes');
app.use('/api/', userRoutes);

const npitypeRoutes = require('./routes/npitypeRoutes');
app.use('/api/', npitypeRoutes);

const stateRoutes = require('./routes/stateRoutes');
app.use('/api/', stateRoutes);

const countyRoutes = require('./routes/countyRoutes');
app.use('/api/', countyRoutes);

const zipcodeRoutes = require('./routes/zipcodeRoutes');
app.use('/api/', zipcodeRoutes);

const specialtygroupRoutes = require('./routes/specialtygroupRoutes');
app.use('/api/', specialtygroupRoutes);

const npisearchRoutes = require('./routes/npisearchRoutes');
app.use('/api/', npisearchRoutes);

const npisearchdownloadRoutes = require('./routes/npisearchdownloadRoutes');
app.use('/api/', npisearchdownloadRoutes);

const npisearchlevelRoutes = require('./routes/npisearchlevelRoutes');
app.use('/api/', npisearchlevelRoutes);

const npisearchviewsRoutes = require('./routes/npisearchviewsRoutes');
app.use('/api/', npisearchviewsRoutes);

const hospitalGroupAffiliationRoutes = require('./routes/hospitalGroupAffiliationRoutes');
app.use('/api/', hospitalGroupAffiliationRoutes);

const affiliatedHospitalsRoutes = require('./routes/affiliatedHospitalRoutes');
app.use('/api/', affiliatedHospitalsRoutes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

module.exports = app;