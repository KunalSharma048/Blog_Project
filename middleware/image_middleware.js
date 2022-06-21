const multer  = require('multer')
//USED FOR EXTENTION LIKE JPG 
const path=require('path')

const Storage=multer.diskStorage({
    destination:'./public/blogimage',
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
})
const upload=multer({
    storage:Storage
}).single('image')


module.exports=upload
