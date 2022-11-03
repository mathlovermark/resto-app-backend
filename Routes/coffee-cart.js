// Declare the variable to require the following built-in and external module
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

//Declaring a variable to have a copy of data from json file and declaring a path
const coffeeCartDataFile = './coffee-cart.json';
const coffeeCartDataPath = path.resolve(__dirname, coffeeCartDataFile);

//Coffee Cart Endpoints
router.get('/', (request, response) => {
  //Reading file path in sync
  const coffeeCart = fs.readFileSync(coffeeCartDataPath);
  // Get Response
  response.send(coffeeCart);
});

// Item added to Cart
router.post('/', (request, response) => {
  //Reading file path in sync
  let coffeeCartList = JSON.parse(fs.readFileSync(coffeeCartDataPath));
  let coffeeExist = false;

  coffeeCartList = coffeeCartList.map((coffee) => {
    if (
      request.params.name?.toLowerCase()?.trim() ===
      coffee.name?.toLowerCase()?.trim()
    ) {
      coffeeExist = true;
      // coffee.quantity += 1;
    }
    return coffee;
  });
  if (!coffeeExist) {
    const newCoffeeCartObject = {
      id: request.body.id,
      name: request.body.name,
      price: request.body.price,
      categories: request.body.categories,
      image: request.body.image,
    };
    coffeeCartList.push(newCoffeeCartObject);
  }
  // POST Response
  fs.writeFileSync(coffeeCartDataPath, JSON.stringify(coffeeCartList, null, 2));
  response.status(201).send();
});

//DELETE
router.delete('/:id', (request, response) => {
  let coffeeCartList = JSON.parse(fs.readFileSync(coffeeCartDataPath)); //Reading file path in sync and transform to JSON
  const filteredCoffeeCart = coffeeCartList.filter(
    (coffee) => coffee.id != request.params.id
  );
  coffeeCartList = filteredCoffeeCart;
  fs.writeFileSync(coffeeCartDataPath, JSON.stringify(coffeeCartList, null, 2));
  response.status(200).send();
});

module.exports = router;
