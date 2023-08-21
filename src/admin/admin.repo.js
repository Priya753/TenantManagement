const knex = require('knex').default;
const conn = require('../config/db.config');
const db = knex(conn);

class AdminRepo{
    addData(data){
        return new Promise((resolve,reject)=>{
            db('moreInfo').insert(data)
            .then((data)=>{
                console.log(data);
                resolve("addData", data);
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }
}

module.exports = new AdminRepo()