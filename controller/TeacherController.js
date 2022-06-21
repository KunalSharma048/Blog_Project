const TeacherModel=require('../models/Teacher.js')


class TeacherController{
    static getteacher=async(req,res)=>{
        try{
            const result=await TeacherModel.find()
            res.render('teacher/displayteacher',{data:result})
        }catch(err){
            console.log(err);
        }
    }
    static createteacher=(req,res)=>{
        res.render('teacher/createteacher');
    }
    //INSERT DATA
    static teacherinsert=async(req,res)=>{
        try{
            const data=new TeacherModel({
                name:req.body.name,
                designation:req.body.designation,
                department:req.body.deparment,
                subject:req.body.subject
            })
            const result= await data.save();
            // console.log(result);
            res.redirect('/teacher/create')


        }catch(err){
            console.log(err)
        }
    }


    //VIEW DATA
    static viewteacher=async(req,res)=>{
        var id=req.params.id;
        try{
            const data= await TeacherModel.findById(id)
            res.render('teacher/view',{data:data})

        }catch(err){
            console.log(err);
        }
    }
}







module.exports={TeacherController}