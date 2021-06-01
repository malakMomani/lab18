  
const people = require('./schema')

exports.handler = async (event) => {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        const {first_name , last_name , age} = JSON.parse(event.body);
        let updatedRecord = await people.update({id , first_name ,last_name , age});
        return {
            statusCode: 201,
            body: JSON.stringify(updatedRecord)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
}