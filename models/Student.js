const mongoose=require('mongoose')
//DEFINE SCHEMA
const StudentSchema= new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:50},
    fees:{type:mongoose.Decimal128,required:true,validate:v =>v >= 5500.50}

})
//CREATE MODEL
const StudentModel=mongoose.model('student',StudentSchema);
//EXPORT
module.exports=mongoose.model('student',StudentSchema);