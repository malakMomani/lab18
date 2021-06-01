const uuid = require('uuid').v4;
const Person = require('./schema')

exports.handler = async (event) => {
    // code goes here
    try {
        const id = uuid();
        const {first_name , last_name , age} = JSON.parse(event.body);
        let record = new Person({id, first_name, last_name , age});
        let newRecord = await record.save();
        return {
            statusCode: 201,
            body: JSON.stringify(newRecord)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
}