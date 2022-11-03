// Declare the variable to require the following built-in and external module
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

//Declaring a variable to have a copy of data from json file and declaring a path
const coffeeDataFile = './coffee-data.json';
const coffeeDataPath = path.resolve(__dirname, coffeeDataFile);

//Coffee Data Endpoints
router.get('/', (request, response) => {
  //Reading file path in sync
  const coffeeItems = fs.readFileSync(coffeeDataPath);
  // Get Response
  response.send(coffeeItems);
});

//http:localhostL8080/coffee/1 - use params to specify a single task
//GET
router.get('/:id', (request, response) => {
  //Reading file path in sync
  const coffeeItems = fs.readFileSync(coffeeDataPath); //string
  //Transform to json
  const coffeeList = JSON.parse(coffeeItems);

  //Find a task
  const coffee = coffeeList.find((coffee) => coffee.id == request.params.id);
  // Get Response
  response.send(coffee);
});

//POST
router.post('/', (request, response) => {
  const coffeeList = JSON.parse(fs.readFileSync(coffeeDataPath)); //Reading file path in sync and transform to JSON
  //Add coffee data
  const newCoffee = {
    id: uuidv4(),
    name: request.body.name,
    categories: request.body.categories,
    price: request.body.price,
    image: request.body.image,
  };
  //push/add to existing data
  coffeeList.push(newCoffee);
  //write to json file
  fs.writeFileSync(coffeeDataPath, JSON.stringify(coffeeList, null, 2));

  response.status(201).send();
});

//PUT
router.put('/:id', (request, response) => {
  const coffeeList = JSON.parse(fs.readFileSync(coffeeDataPath)); //Reading file path in sync and transform to JSON
  // Tap the specific data via ID and update the data
  coffeeList.forEach((coffee) => {
    if (coffee.id == request.params.id) {
      coffee.id = request.body.id;
      coffee.name = request.body.name;
      coffee.categories = request.body.categories;
      coffee.price = request.body.price;
      coffee.image = request.body.image;
    }
  });
  fs.writeFileSync(coffeeDataPath, JSON.stringify(coffeeList, null, 2));
  response.status(200).send();
});

//DELETE
router.delete('/:id', (request, response) => {
  const coffeeList = JSON.parse(fs.readFileSync(coffeeDataPath)); //Reading file path in sync and transform to JSON
  const filteredCoffee = coffeeList.filter(
    (coffee) => coffee.id != request.params.id
  );

  fs.writeFileSync(coffeeDataPath, JSON.stringify(filteredCoffee, null, 2));
  response.status(200).send();
});

module.exports = router;
