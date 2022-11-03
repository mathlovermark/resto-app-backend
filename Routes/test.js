// Declare the variable to require the following built-in module
const express = require('express');
const router = express.Router();

router.get('/', (require, response) => {
  response.send('This is a get response');
});

router.post('/', (require, response) => {
  response.send('This is a post response');
});

router.put('/', (require, response) => {
  response.send('This is a put response');
});

router.delete('/', (require, response) => {
  response.send('This is a delete response');
});
//Export the module
module.exports = router;
