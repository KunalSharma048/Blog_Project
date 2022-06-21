const mongoose=require('mongoose')
//DEFINE SCHEMA
const ContactSchema= new mongoose.Schema({
   name:{ type:String ,Required: true,trim:true},
   email:{ type:String ,Required: true,trim:true},
   phone:{ type:Number ,Required: true,trim:true},
   message:{ type:String ,Required: true,trim:true},
   
},{timestamps:true})
//CREATE MODEL
const ContactModel=mongoose.model('contact',ContactSchema);
//EXPORT
module.exports=ContactModel