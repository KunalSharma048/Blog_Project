const mongoose = require('mongoose');
const connectDB=()=>{
    return mongoose.connect("mongodb://localhost:27017/schooldb")
     .then(()=>{
         console.log("connect successfully..")
     })
      .catch((err)=>{
         console.log(err)
     })
}



module.exports = connectDB