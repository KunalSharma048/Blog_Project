const BlogModel=require('../models/Blog.js')



class blogController{


    static createblog=async(req,res)=>{
        res.render('blog/create');
    }
    static bloginsert=async(req,res)=>{
        try{
        const data= new BlogModel({
           title:req.body.title,
           description:req.body.description 
        })
        const result=  await data.save();
        res.redirect('/blog/create')
        }catch(err){
            console.log(err);
        }
        }

     static getalldoc=async(req,res)=>{
         try{
             const result=await BlogModel.find();
             res.render('blog/display',{data:result})

         }catch(err){
             console.log(err)
         }
     }   

     static viewblog=async(req,res)=>{
        try{
            const result=await BlogModel.findById(req.params.id);
            res.render('blog/view',{data:result})

        }catch(err){
            console.log(err)
        }
    }
    static editblog=async(req,res)=>{
        try{
            const result=await BlogModel.findById(req.params.id);
            res.render('blog/edit',{data:result})

        }catch(err){
            console.log(err)
        }
    }
    static updateblog=async(req,res)=>{
        try{
            const result=await BlogModel.findByIdAndUpdate(req.params.id,req.body);
            res.redirect('/blog/display')

        }catch(err){
            console.log(err)
        }
    }
    static deleteblog=async(req,res)=>{
        try{
            const result=await BlogModel.findByIdAndDelete(req.params.id,req.body);
            res.redirect('/blog/display');

        }catch(err){
            console.log(err)
        }
    }     

}


module.exports=blogController;