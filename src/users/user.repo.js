const knex = require('knex').default;
const conn = require('../config/db.config')
const db = knex(conn);

class UserRepo{
    createUser(data){
        console.log("data1", data);
        return new Promise((resolve,reject)=>{
            db('users').insert(data)
            .then((users)=>{
                console.log(data);
                resolve("users", users);
                
            })
            .catch((error)=>{
                console.log(error);
                reject(error);
                throw error;
            })
        })
    }

    findEmail(email){
        return new Promise((resolve,reject)=>{
            db('users').select("email").first()
            where("email",email)
            .then((data)=>{
                resolve(data);
            })
            .catch((error)=>{
                reject(error);
                throw error;
            })
        })
    }

}

module.exports = new UserRepo();