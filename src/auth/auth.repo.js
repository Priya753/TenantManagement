const knex = require('knex').default;
const conn = require('../config/db.config');
const db = knex(conn);

class AuthRepo{
    getData(email){
        return new Promise((resolve,reject)=>{
            knex('users')
               .select('email','Password').first()
            .where('email',email) 
            .then(function(users){
                console.log()
                resolve(users)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }

    updatePass(pass){
       return new Promise((resolve,reject)=>{
        knex('users')
        .where({Username: username})
        .update({Password : pass})
        .then((users)=>{
            console.log("Password is Updated!")
            resolve(users)
        })
        .catch((err)=>{
            console.log(err)
            reject(err)
        }) .then((users)=>{
            
        })
       }) 
    }
}

module.exports = new AuthRepo()