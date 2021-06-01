'use strict';

const people = require('./schema');

exports.handler = async(event)=> {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        let items; 
        if (id) {
            // get a specific record
            items = await people.query('id').eq(id).exec();
            items = items[0];

        } else {
            // get all records
            items = await people.scan().exec();
        }
        
        return {
            statusCode: 200,
            body: JSON.stringify(items)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
   
}