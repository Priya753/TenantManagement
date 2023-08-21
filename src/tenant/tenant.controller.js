const tenantRepo = require("./tenant.repo");
const {StatusCodes} = require('http-status-codes')

class TenantController{
    async bookNow(req,res){
        try{
            const { move_in_date, date, name,email, gender, taken_amount, schedule_visit, amenities} = req.body;
            const data = {
                move_in_date:move_in_date,
                date:date,
                name:name,
                email:email,
                gender:gender,
                taken_amount:taken_amount,
                schedule_visit:schedule_visit,
                amenities:amenities
            }
            console.log("data",data);
            const response = await tenantRepo.book_now(data);
            if(response){
                res.status(StatusCodes.ACCEPTED).send({message:'booked sucessfully'});
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

    async getRequire(req,res){
        try{
            const require = req.body;
            const response = await tenantRepo.moreInfo(require);
            if(response){
                res.status(StatusCodes.ACCEPTED).send({data:response});
            }
            else{
                res.status(StatusCodes.EXPECTATION_FAILED).send({message:"error"});
            }
        }
        catch(error){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:error.message});
        }
    }

    async getReq(req,res){
        try{
            const data = req.body;
            const response = await tenantRepo.moreInfo(data);
            if(response){
                res.status(StatusCodes.ACCEPTED).send({message:'form submitted'});
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

    async getData(req,res){
        try{
            const response = await tenantRepo.moreInfo();
            if(response){
                const {name, } = response
                const  infoData = {
                    TenantName : name,
                    propertyName : propertyName,
                    address:address,
                    PropertyName: PropertyName,
                    rentamount:rentamount,
                    rentDate:rentDate,
                    tenant_members:tenant_members,
                    lock_in_period: lock_in_period,
                    deposit:deposit,
                    due_payment : due_payment,
                    duedate: duedate,
                    rent_received : rent_received
                }
                res.status(StatusCodes.OK).send({data : InfoData});
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
    payRent(req,res){[
        
    ]}
}

module.exports = new TenantController();



































