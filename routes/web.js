const express=require('express');
const blogController = require('../controller/blogController.js');
const upload = require('../middleware/image_middleware.js');

const blogImageController = require('../controller/blogImageController.js');
const categoryController = require('../controller/categoryController.js');
const contactController = require('../controller/contactController.js');
const { home,about, contact, blog, login, detail } = require('../controller/FrontController.js');
const { StudentController } = require('../controller/StudentController.js');
const { TeacherController } = require('../controller/TeacherController.js');
const usercontroller = require('../controller/userController.js');
const auth = require('../middleware/auth.js');
const router=express.Router();


router.get('/',home)
router.get('/about',about)
router.get('/contact',contact)
router.get('/bloglist',blog)
router.get('/login',login)
router.get('/detail/:id',detail)
//STUDENT CONTROLLER
router.get('/student/display',StudentController.getAlldoc)
router.get('/student/create',StudentController.createdoc)
router.post('/student/insert',StudentController.studentinsert);
router.get('/student/view/:id',StudentController.viewsstudent);
router.get('/student/edit/:id',StudentController.editstudent);
router.post('/student/update/:id',StudentController.updatestudent);
router.get('/student/delete/:id',StudentController.deletestudent);
// Teacher Controller
router.get('/teacher/displayteacher',TeacherController.getteacher)
router.get('/teacher/create',TeacherController.createteacher)
router.post('/teacher/insert',TeacherController.teacherinsert)
router.get('/teacher/view/:id',TeacherController.viewteacher)


//BLOG CONTROLLER
router.get('/blog/create',blogController.createblog)
router.post('/blog/insert',blogController.bloginsert);
router.get('/blog/display',blogController.getalldoc);
router.get('/blog/view/:id',blogController.viewblog);
router.get('/blog/edit/:id',blogController.editblog);
router.post('/blog/update/:id',blogController.updateblog);
router.get('/blog/delete/:id',blogController.deleteblog);
//CATEGORY CONTROLLER
router.get('/category/create',categoryController.createcategory)
router.post('/category/insert',categoryController.insertcategory);
router.get('/category/display',categoryController.displaycategory);
router.get('/category/view/:id',categoryController.viewcategory);
router.get('/category/edit/:id',categoryController.editcategory);
router.post('/category/update/:id',categoryController.updatecategory);
router.get('/category/delete/:id',categoryController.deletecategory);
//CONTACTINSERT
router.post('/contactinsert',contactController.contactinsert);




//BLOGIMAGE
router.get('/blogimage/create',blogImageController.createimage)
router.post('/blogimage/insert',blogImageController.blogimageinsert);
router.get('/blogimage/display',blogImageController.displayimage);
router.get('/blogimage/view/:id',blogImageController.viewblog);
router.get('/blogimage/edit/:id',blogImageController.editblog);
router.post('/blogimage/update/:id',upload,blogImageController.updateblog);
router.get('/blogimage/delete/:id',blogImageController.deleteblog);
//USERCONTROLLER
router.get('/user/create',usercontroller.create);
router.post('/user/insert',usercontroller.insertuser);
router.post('/adminlogin',usercontroller.adminlogin);
router.get('/dashboard',auth,usercontroller.dashboard);
//logout
router.get('/logout',auth,usercontroller.logout)

module.exports=router