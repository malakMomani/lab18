const schema = require('./schema')

exports.handler = async (event) => {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        let deleted = await schema.delete({id})
  
        return {
            statusCode: 201,
            body: JSON.stringify(deleted)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
}