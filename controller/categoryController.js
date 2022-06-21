const categoryModel=require('../models/category.js')


class categoryController{
    static createcategory=async(req,res)=>{
        try{
            res.render('category/create');
            

        }catch(err){
            console.log(err)
        }
    }
    static insertcategory=async(req,res)=>{
        try{
            const data=  new categoryModel({
                title:req.body.title
            })
            const result= await data.save();
            res.redirect('/category/create')

        }catch(err){
        console.log(err)
        }
    }
    static displaycategory=async(req,res)=>{
        try{
            const data= await categoryModel.find();
            res.render('category/display',{data:data})

        }catch(err){
            console.log(err)
        }

    }
    static viewcategory=async(req,res)=>{
        try{
            const result=await categoryModel.findById(req.params.id);
            res.render('category/view',{data:result})

        }catch(err){
            console.log(err)
        }
    }
    static editcategory=async(req,res)=>{
        try{
            const result=await categoryModel.findById(req.params.id);
            res.render('category/edit',{data:result})

        }catch(err){
            console.log(err)
        }
    }
    static updatecategory=async(req,res)=>{
        try{
            const result=await categoryModel.findByIdAndUpdate(req.params.id,req.body);
            res.redirect('/category/display')

        }catch(err){
            console.log(err)
        }
    }
    static deletecategory=async(req,res)=>{
        try{
            const result=await categoryModel.findByIdAndDelete(req.params.id,req.body);
            res.redirect('/category/display');

        }catch(err){
            console.log(err)
        }
    }   

}









module.exports=categoryController;
