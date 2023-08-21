const knex = require('knex').default;
const conn = require('../config/db.config')
const db = knex(conn);

class TenantRepo{
    book_now(data){
        return new Promise((resolve,reject)=>{
            db('book_now').insert(data)
            .then((data)=>{
                console.log(data);
                resolve("book_now", data);
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }


    moreInfo(data){
        return new Promise((resolve,reject)=>{
            db('tenant').insert(data)
            .then((data)=>{
                console.log(data);
                resolve("tenant", data);
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }
}
module.exports = new TenantRepo();