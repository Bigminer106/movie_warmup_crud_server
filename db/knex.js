const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js');
const environmentConfig = config[environment];
const knex = require('knex');
const connection = knex(environmentConfig);
console.log(`Nodemon is listening on port ${process.env.PORT || 3000}`);
module.exports = connection;
