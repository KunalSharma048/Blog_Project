const mongoose=require('mongoose')
//DEFINE SCHEMA
const TeacherSchema= new mongoose.Schema({
   name:String,
   designation:String,
   department:String,
   subject:String
})
//CREATE MODEL
const TeacherModel=mongoose.model('teacher',TeacherSchema);
//EXPORT
module.exports=mongoose.model('teacher',TeacherSchema);
