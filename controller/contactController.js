var ContactModel=require('../models/contact.js')

class contactController{

    static contactinsert=async(req,res)=>{
        try{
        const data= new ContactModel({
           name:req.body.name,
           email:req.body.email,
           phone:req.body.phone,
           message:req.body.message,
        })
        const result=  await data.save();
        res.redirect('/contact')
        }catch(err){
            console.log(err);
        }
    }
}
module.exports=contactController