//MODEL DEFINED
const StudentModel=require('../models/Student.js')

class StudentController{

   static getAlldoc=async(req,res)=>{
       try{
           const result=await StudentModel.find()
        //    console.log(result);
           res.render('student/display',{data:result});

       }catch(err){
           console.log(err)
       }
      
   }


   static createdoc=(req,res)=>{
    res.render('student/create');
    }
    
    static studentinsert=async(req,res)=>{
        // console.log(req.body);
        try{
            const data= new StudentModel({
                name:req.body.name,
                age:req.body.age,
                fees:req.body.fees

            })
            // Saving Data
            const result=await data.save();
            console.log(result);
            res.redirect('/student/create');
         

        }catch(err){
          console.log(err);
        }
    }
      static viewsstudent=async(req,res)=>{
        //   console.log(req.params.id);
          try{
              const data= await StudentModel.findById(req.params.id);
            //   console.log(data);
            res.render("student/view",{d:data})
              

          }catch(err){
              console.log(err)
          }
          
      }
      static editstudent=async(req,res)=>{
        //   console.log(req.params.id);
          try{
              const data= await StudentModel.findById(req.params.id);
            //   console.log(data);
            res.render("student/edit",{d:data})
              

          }catch(err){
              console.log(err)
          }
          
      }
      static updatestudent=async(req,res)=>{
        //   console.log(req.body);
          try{
              const data= await StudentModel.findByIdAndUpdate(req.params.id,req.body)
            //   console.log(data);
            res.redirect("/student/display")
              

          }catch(err){
              console.log(err)
          }
          
      }
      static deletestudent=async(req,res)=>{
        //   console.log(req.body);
          try{
              const data= await StudentModel.findByIdAndDelete(req.params.id)
            //   console.log(data);
            res.redirect("/student/display")
              

          }catch(err){
              console.log(err)
          }
          
      }

      
    



}


module.exports={StudentController}
