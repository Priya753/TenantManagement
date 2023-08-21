const {StatusCodes} = require('http-status-codes')
const userRepo = require("../users/user.repo")
const auth  = require('../helper/authHelper')
const authRepo = require('./auth.repo')

class AuthController{
    async Register(req,res){
         
        try{
            const  {name, email, age, gender, phoneNo, occupation} = req.body;
            const pass = auth.generatePassword();
            const data = {
                name : name,
                email:email,
                age : age,
                gender:gender,
                phoneNo:phoneNo,
                occupation:occupation,
                password: pass
            }
        console.log("data",data);
        const response = await userRepo.createUser(data);
        if(response){
            res.status(StatusCodes.ACCEPTED).send({message:'registration sucessfully'});
        }
        else{
            res.status(StatusCodes.EXPECTATION_FAILED).send({message:"error"});
        }
        }
        catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:error.message});
           // console.log(error);
        }
    }

    async  login (req,res){
        try 
        { 
        const body  = req.body;
            let condition = body.email
            let response  = await userRepo.findEmail(condition)
            if(response){
                return res.status(StatusCodes.OK).send({"message":"user logged in Succesfully"})
            }else{
                return res.status(StatusCodes.UNAUTHORIZED).send({"message":"user credentials not matched "});}
        
        } catch(error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({'message' :error.message});
        }
    }
    
}
module.exports = new AuthController();