// Update with your config settings.
const dotenv = require('dotenv')
dotenv.config({debug:true})

module.exports = {
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOSTNAME,
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        
    },
    pool: {
        min: process.env.DB_POOL_MIN,
        max: process.env.DB_POOL_MAX,
    }
}

console.log("databaase ");
