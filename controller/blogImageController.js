 const BlogimageModel=require('../models/blogimage.js')

 class blogImageController{
     static createimage=async(req,res)=>{
         res.render('blogimage/create')
     }
     static blogimageinsert=async(req,res)=>{
        try{
            const data =new BlogimageModel({
                title:req.body.title,
                description:req.body.description,
                image:req.file.filename
            })
            const result= await data.save()
            res.redirect('/blogimage/create')
            // console.log(result)

        }catch(err){
            console.log(err)
        }
        
    }
    static displayimage=async(req,res)=>{
        
        try{
            const result=await BlogimageModel.find();
            res.render('blogimage/display',{data:result})

        }catch(err){
            console.log(err)
        }
    }
    static viewblog=async(req,res)=>{
        try{
            const result=await BlogimageModel.findById(req.params.id);
            res.render('blogimage/view',{data:result})

        }catch(err){
            console.log(err)
        }
    }
    static editblog=async(req,res)=>{
        try{
            const result=await BlogimageModel.findById(req.params.id);
            res.render('blogimage/edit',{data:result})

        }catch(err){
            console.log(err)
        }
    }
    static updateblog=async(req,res)=>{
        try{
            if (req.file) {
                var imageFile = req.file.filename;
              }  
         
            const result =await BlogimageModel.findByIdAndUpdate(req.params.id,{
                title: req.body.title,
                image: imageFile,
        
              })
            res.redirect('/blogimage/display')

        }catch(err){
            console.log(err)
        }
    }
    static deleteblog=async(req,res)=>{
        try{
            const result=await BlogimageModel.findByIdAndDelete(req.params.id,req.body);
            res.redirect('/blogimage/display');

        }catch(err){
            console.log(err)
        }
    }  
 }
 module.exports=blogImageController