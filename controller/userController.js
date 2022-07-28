const bcrypt = require('bcryptjs');
const userModel = require("../models/user");




class usercontroller {
    static create = async (req, res) => {
        res.render('user/create', { message: req.flash('error') });
    }
    static insertuser = async (req, res) => {
        const { username, email, password, password_confirmation } = req.body
        const user = await userModel.findOne({ email: email })
        console.log(user)
        if (user) {
            req.flash('error', 'Email Already Exist')
            return res.redirect('/user/create')

        } else {
            if (username && email && password && password_confirmation) {

                if (password === password_confirmation) {
                    try {
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password, salt)
                        const result = new userModel({
                            username: username,
                            email: email,
                            password: hashPassword
                        })
                        const token = await result.generateAuthToken();
                        // console.log(token)
                        res.cookie('jwt',token)
                        await result.save()
                        req.flash('error', 'Sign Up Successfully')
                        return res.redirect('/user/create')
                        

                    } catch (err) {
                        console.log(err)


                    }

                } else {
                    req.flash('error', 'Paaword and confurm password does not match')
                    return res.redirect('/user/create')


                }

            } else {
                req.flash('error', 'All Field are Required')
                return res.redirect('/user/create')

            }
        }
    }

    static adminlogin = async (req, res) => {
       try{
        //    console.log(req.body)
        const {email,password}=req.body
        if(email && password){
            const user =await userModel.findOne({email:email})
            if(user !=null){
                const isMatch=await bcrypt.compare(password,user.password)
                if((user.email===email) && isMatch){
                    const token = await user.generateAuthToken();
                    // console.log(token)
                    res.cookie('jwt',token)
                    res.redirect('/dashboard')
                }else{
                    req.flash('error', 'Email or Password is Not Valid')
                    res.redirect('/login')
                }

            }else{
                req.flash('error', 'You Are Not a Registered User')
                res.redirect('/login')

            }

        }else{
            req.flash('error', 'All Field are Required')
            res.redirect('/login')
        }
       }
       catch(err){
           console.log(err)

       }

    }
    static dashboard = async (req, res) => {
        // console.log(req.user);
        const data=req.user
        res.render('admin/dashboard',{data:data})
    }
    static logout=async(req,res)=>{
        try{
            res.clearCookie("jwt");
      // console.log("Logout Successfully")
            res.redirect('/login')

        }catch(err){
            console.log(err)

        }
    }

}
module.exports = usercontroller