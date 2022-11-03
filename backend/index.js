// Declare the variable to require the following built-in and external module
const { response } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// Body Parser
const bodyParser = require('body-parser');
// Basically tells the system that you want json to be used
app.use(bodyParser.json());

// Routes Middleware, allows us to connect other express file to the main express file
//  Route is a section of Express code that associates an HTTP verb
// ( GET , POST , PUT , DELETE , etc.), a URL path/pattern, and a function that is called to handle that pattern.
const coffeeRouter = require('./Routes/coffee-data');
const testRouter = require('./Routes/test');
const cartRouter = require('./Routes/coffee-cart');
// const CoffeeCartRouter = require('./Routes/coffee-cart');

//cors middleware
//enable connection from other platform
app.use(
  cors({
    origin: '*',
  })
);

//Able to create routes in server
app.use('/test', testRouter);
app.use('/coffee', coffeeRouter);
app.use('/cart', cartRouter);

//Check where server is running at declared PORT
app.listen(port, () => {
  console.log(`The server is running at port ${port}`);
});
