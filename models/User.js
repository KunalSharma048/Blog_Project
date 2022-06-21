const mongoose=require('mongoose')
const  jwt = require('jsonwebtoken');

const userSchema =new mongoose.Schema({
    username: {type:String, 
        required: true,
    },

	email: {
        type:String, 
        required: true,
        unique: true, 
        },
    password: {
        type:String, 
        required: true
    },
    role:{
        type:String,
        default:'customer'

    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
    
},{timestamps:true});

//DEFINING TOKEN
userSchema.methods.generateAuthToken=async function(){
    try{
        const kunal = jwt.sign({ _id:this._id.toString() }, 'kunalsharma23322332itmcollege434334');
        // console.log(token)
        this.tokens=this.tokens.concat({token:kunal})
        await this.save()
        return kunal

    }catch(err){
        console.log(err)

    }
}

var userModel = mongoose.model('users', userSchema);
module.exports=userModel;