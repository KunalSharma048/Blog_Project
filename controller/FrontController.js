const BlogImageModel=require('../models/blogimage.js')
const categoryModel=require('../models/category.js')
const home=async(req,res)=>{
 const data=await BlogImageModel.find();
    res.render('home',{data:data})
}
const about=(req,res)=>{
    res.render('about')
}
const detail=async(req,res)=>{
    try{
        const view= await BlogImageModel.findById(req.params.id);
        const category= await categoryModel.find();
        const recentblogs= await BlogImageModel.find();
        res.render('detail',{data:view,category:category,recentblogs:recentblogs});
    }catch(err){
        console.log(err);
    }
}
const contact=(req,res)=>{
    res.render('contact')
}
const blog=(req,res)=>{
    res.render('blog')
}
const login=(req,res)=>{
    res.render('login',{message:req.flash('error')})
}






module.exports={
    home,about,contact,blog,login,detail
}