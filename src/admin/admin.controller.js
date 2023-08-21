const {StatusCodes} = require('http-status-codes')
const userRepo = require("../users/user.repo")
const auth  = require('../helper/authHelper')
const AdminRepo = require('./admin.repo');

class AdminController{
    async addTenantData(req,res){
        try{  
            const {
                PropertyName, address, rentamount, rentDate, tenant_members,
                lock_in_period, deposit, due_payment, duedate, rent_received 
                } = req.body;
        
            const data = {
                PropertyName: PropertyName,
                address:address,
                rentamount:rentamount,
                rentDate:rentDate,
                tenant_members:tenant_members,
                lock_in_period: lock_in_period,
                deposit:deposit,
                due_payment : due_payment,
                duedate: duedate,
                rent_received : rent_received,    
            }

            console.log("tenant data",data);
            const response = await AdminRepo.addData(data);
            if(response){
                res.status(StatusCodes.ACCEPTED).send({message:'data add sucessfully'});
            }else{
                res.status(StatusCodes.EXPECTATION_FAILED).send({message:"error"});
            }
        }
        catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:error.message});
           // console.log(error);
        }
    }
}


module.exports = new AdminController();