const mongoose = require('mongoose');
const databaseurl="mongodb+srv://Blog123:LEGEND48@cluster0.o7xgm0b.mongodb.net/blog?retryWrites=true&w=majority"

const connectDB=()=>{
    return mongoose.connect(databaseurl)
     .then(()=>{
         console.log("connect successfully..")
     })
      .catch((err)=>{
         console.log(err)
     })
}



module.exports = connectDB