
const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    age: Number
});

module.exports = dynamoose.model('people', schema);