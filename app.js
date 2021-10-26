const express=require('express');
// const Userdata=require('./src/model/userdata');
const Alumnidata=require('./src/model/alumnidata');
const Facultydata=require('./src/model/facultydata');
const Jobpostdata=require('./src/model/jobpostdata');
//  const Jobadmindata=require('./src/model/jobadmindata');
const Employerdata=require('./src/model/employerdata');
const Appliedjobdata=require('./src/model/appliedjobdata')

var nodemailer = require('nodemailer');
const jwt=require('jsonwebtoken');

const cors=require('cors');
// const Jobemployerdata = require('./src/model/jobemployerdata');
var app=new express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
// app.use(express.json());



// ------------------------Sign UP---------------------------
// app.post('/signup/insert', function(req,res){
//   res.header("Access-Control-Allow-Origin","*")
//   res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS")
//   console.log(req.body);


// let  email=req.body.user.email;
// let  password=req.body.user.password;
// let  register=req.body.user.register;

         

// Userdata.findOne({email:email,password:password},function(err,user){
  
//   if(!user){
//       var user={
//         register:req.body.user.register,
//           name:req.body.user.name,
//          phonenumber:req.body.user.phonenumber,
//          email:req.body.user.email,
//          password:req.body.user.password,
//          passwordcheck:req.body.user.passwordcheck,
//          status:req.body.user.status
//       }
// var user=new Userdata(user);
// user.save();
// if(register==="Faculty"){
// regi="Faculty"
//   return res.status(200).send(regi);
// }
// if(register==="Alumni"){
//   regi="Alumni"
//     return res.status(200).send(regi);
//   }
//   if(register==="Employer"){
//     regi="Employer"
//       return res.status(200).send(regi);
//     }

//   }
//   else{
//       return res.status(400).send({message:"Already exist"});
      
//    }
// })
// })

// ------------------------trial for job post employer---------------------------


app.post('/jobpost/insert', verifyToken,function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS")
 // console.log(req.body.jobdetail);

  var jobemp={
            companyName:req.body.jobdetail.companyName,
            jobTitle:req.body.jobdetail.jobTitle,
             registeredEmail:req.body.jobdetail.registeredEmail,
            startDate:req.body.jobdetail.startDate,
            endDate:req.body.jobdetail.endDate,
            qlfnItem:req.body.jobdetail.qlfnItem,
            experience:req.body.jobdetail.experience,
            passItem:req.body.jobdetail.passItem,
            skillItem:req.body.jobdetail.skillItem,
            infor:req.body.jobdetail.infor,
            companyinfor:req.body.jobdetail.companyinfor,
          }
    var jobemp=new Jobpostdata(jobemp);
    jobemp.save();

    return res.status(200).send();


})

// ------------------------trial for job postfacutly---------------------------


app.post('/jobpostfaculty/insert', verifyToken,function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS")
 // console.log(req.body.jobdetailfaculty);

  var jobfac={
            companyName:req.body.jobdetailfaculty.companyName,
            jobTitle:req.body.jobdetailfaculty.jobTitle,
             registeredEmail:req.body.jobdetailfaculty.registeredEmail,
            startDate:req.body.jobdetailfaculty.startDate,
            endDate:req.body.jobdetailfaculty.endDate,
            qlfnItem:req.body.jobdetailfaculty.qlfnItem,
            experience:req.body.jobdetailfaculty.experience,
            passItem:req.body.jobdetailfaculty.passItem,
            skillItem:req.body.jobdetailfaculty.skillItem,
            infor:req.body.jobdetailfaculty.infor,
            companyinfor:req.body.jobdetailfaculty.companyinfor,
          }
          
    var jobfac=new Jobpostdata(jobfac);
    jobfac.save();

    return res.status(200).send();


})


// ------------------------trial for job postadmin---------------------------


app.post('/jobpostadmin/insert', verifyToken,function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS")
 // console.log(req.body.jobdetailadmin);

  var jobadm={
            companyName:req.body.jobdetailadmin.companyName,
            jobTitle:req.body.jobdetailadmin.jobTitle,
             registeredEmail:req.body.jobdetailadmin.registeredEmail,
            startDate:req.body.jobdetailadmin.startDate,
            endDate:req.body.jobdetailadmin.endDate,
            qlfnItem:req.body.jobdetailadmin.qlfnItem,
            passItem:req.body.jobdetailadmin.passItem,
            experience:req.body.jobdetailadmin.experience,
            skillItem:req.body.jobdetailadmin.skillItem,
            infor:req.body.jobdetailadmin.infor,
            companyinfor:req.body.jobdetailadmin.companyinfor,
          }
    var jobadm=new Jobpostdata(jobadm);
    jobadm.save();

    return res.status(200).send();


})



//---------------------------------------Applied job data to back end--------
app.post('/insertappliedjob',verifyToken,function(req,res){
   
  // console.log(req.body);
  
 
  var employee = {       
      jobtitle:req.body.product.jobtitle,
      companyname:req.body.product.companyname,
      startdate:req.body.product.startdate,
      startdate:req.body.product.startdate,
      enddate:req.body.product.enddate,
      companyemail:req.body.product.companyemail,
      firstname:req.body.product.firstname,
      lastname:req.body.product.lastname,
      email:req.body.product.email,
      phone:req.body.product.phone,
      gender:req.body.product.gender,
      experience:req.body.product.experience,
      resume:req.body.product.resume,
      resumefile:req.body.product.resumefile,
      onlinelink:req.body.product.onlinelink,
      skillone:req.body.product.skillone,
      skilltwo:req.body.product.skilltwo,
      skillthree:req.body.product.skillthree,
      skillfour:req.body.product.skillfour,
      skillfive:req.body.product.skillfive,
      skillsix:req.body.product.skillsix,
      passout:req.body.product.passout,
      qualifications:req.body.product.qualifications
 }       
 var appliedjobDetails = new Appliedjobdata(employee);
 appliedjobDetails.save();
});

//-----------------------retrieving data frm db-------------------------
app.get('/applied', verifyToken,function(req,res){
  res.header('Access-Control-Allow-Origin',"*");
  res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
  Appliedjobdata.find()
  .then(function(applied){
      res.send(applied);
  })
})




// ------------------------Count---------------------------




// app.get('/employercount',function(req,res){ 
// res.header("Access-Control-Allow-Origin",'*')
// res.header("Access-Control-Allow-Methods:GET,POST,PUT,PATCH,DELETE,OPTIONS")
//  Employerdata.count({status:"confirmed"})
//  .then(function(employercount){
//   console.log(employercount)
//     res.send(employercount)
//  })
 
//  })
 

// var count=Userdata.find({register:"Faculty"}).count()
// console.log(count)

  
// --------------------------------Confirm Alumni by admin ---------------------------
app.put('/update',verifyToken,(req,res)=>{
  
  id=req.body._id;
  // console.log(id);
  // var id=Alumnidata.ObjectId(req.body._id)
  // const{id}=req.body
  // console.log(req.body)
  // console.log(id);
   
 
  Alumnidata.findByIdAndUpdate({"_id":req.body._id},
                               {$set:{"status":"confirmed"
                           }})
  .then(function(){
      res.send();
  })
 })




// ------------------------login---------------------------

app.post('/login',(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    let register=req.body.register;
    let status=req.body.status;
    //console.log(register)
   // console.log(status)
    
   
      let payload = {subject:email+password}
        let token = jwt.sign(payload, 'secretKey')
       
      if(email==="admin@jobportal.com" && password==="Admin@123" && register==="Admin"){
        role="admin";
      res.status(200).send({token,role});
       }
       
     else if(register==="Faculty"){
      Facultydata.findOne({email:email,password:password,status:status},function(err,user){
        if(user){
          role="Faculty";
          res.status(200).send({token,role});
            }
          else {
                res.status(400).send();
              }  
        })
      }


       else if(register==='Alumni'){
          Alumnidata.findOne({email:email,password:password,status:status},function(err, user){
            if(user){
              role="Alumni";
              res.status(200).send({token,role});
                }
               else {
                  console.log("called")
                    res.status(400).send();
                  }  
            })

          }
           else if(register==='Employer'){
              Employerdata.findOne({email:email,password:password,status:status},function(err,user){
                if(user){
                  role="Employer";
                  // console.log('called');
                  res.status(200).send({token,role});
                   
                    }
                   else {
                      // console.log("called")
                        res.status(400).send();

                      }  
                })

              }
             
})
   







function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }
// app.post('/insert',verifyToken,function(req,res){
//     res.header("Access-Control-Allow-Origin","*")
//     res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS")
//    // console.log(req.body);
// var book={
//     title:req.body.book.title,
//     author: req.body.book.author,
//     genre: req.body.book.genre,
//     language: req.body.book.language,
//     info: req.body.book.info,
//     // fd:req.body.book.fd
//     image: req.body.book.image,
//     imgfile:req.body.book.imgfile
    
// }
// var book=new Bookdata(book);
// book.save();
// })

// --------------------------------Detailed employer signup to backend----------------------------


app.post('/employer/new/insert',  function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS")
  console.log(req.body);

  let  email=req.body.employerdetail.email;
  let  password=req.body.employerdetail.password;
  let  register=req.body.employerdetail.register;
  
           
  
  Employerdata.findOne({email:email,password:password},function(err,user){
    
    if(!user){

var employerdetail={
  register: req.body.employerdetail.register,
  name: req.body.employerdetail.name,
  email: req.body.employerdetail.email,
  phonenumber:req.body.employerdetail.phonenumber,
  password:req.body.employerdetail.password,
  passwordcheck:req.body.employerdetail.passwordcheck,
  info: req.body.employerdetail.info,
  image: req.body.employerdetail.image,
  imgfile:req.body.employerdetail.imgfile,
  status:req.body.employerdetail.status,
  id:req.body.employerdetail._id
}
var employerdetail=new Employerdata(employerdetail);
employerdetail.save();
return res.status(200).send();
}
else{
  return res.status(400).send({message:"Already exist"});
  
}
})
})



// --------------------------------Detailed faculty signup to backend----------------------------


app.post('/faculty/insert', function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS")
  //console.log(req.body);

  let  email=req.body.facultydetail.email;
  let  password=req.body.facultydetail.password;
  let  register=req.body.facultydetail.register;
  
           
  
  Facultydata.findOne({email:email,password:password},function(err,user){
    
    if(!user){


var facultydetail={
  register: req.body.facultydetail.register,
  name: req.body.facultydetail.name,
  email: req.body.facultydetail.email,
  phonenumber:req.body.facultydetail.phonenumber,
  password:req.body.facultydetail.password,
  passwordcheck:req.body.facultydetail.passwordcheck,
  info: req.body.facultydetail.info,
  image: req.body.facultydetail.image,
  imgfile:req.body.facultydetail.imgfile,
  status:req.body.facultydetail.status,
  id:req.body.facultydetail._id
}
var facultydetail=new Facultydata(facultydetail);
facultydetail.save();
return res.status(200).send();
}
else{
  return res.status(400).send({message:"Already exist"});
  
}
})
})


// --------------------------------Detailed alumni signup to backend----------------------------


app.post('/alumni/insert', function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS")
 // console.log(req.body);
  let  email=req.body.alumnidetail.email;
  let  password=req.body.alumnidetail.password;
  let  register=req.body.alumnidetail.register;
  
           
  
  Alumnidata.findOne({email:email,password:password},function(err,user){
    
    if(!user){
var alumnidetail={
  register: req.body.alumnidetail.register,
  name: req.body.alumnidetail.name,
  email: req.body.alumnidetail.email,
  phonenumber:req.body.alumnidetail.phonenumber,
  password:req.body.alumnidetail.password,
  passwordcheck:req.body.alumnidetail.passwordcheck,
  info: req.body.alumnidetail.info,
  image: req.body.alumnidetail.image,
  imgfile:req.body.alumnidetail.imgfile,
  status:req.body.alumnidetail.status,
  id:req.body.alumnidetail._id
}
var alumnidetail=new Alumnidata(alumnidetail);
alumnidetail.save();

return res.status(200).send();
}
else{
  return res.status(400).send({message:"Already exist"});
  
}
})
})
// --------------------------------Detailed alumni signup to Admin dashboard ---------------------------

app.get('/details/forverification/alumni', verifyToken,function(req,res){
  res.header("Access-Control-Allow-Origin",'*')
  res.header("Access-Control-Allow-Methods:GET,POST,PUT,PATCH,DELETE,OPTIONS")
  Alumnidata.find()
  .then(function(alumni){
      res.send(alumni)
  })
})
// --------------------------------Detailed employer signup to Admin dashboard ---------------------------

app.get('/details/forverification/employer', verifyToken,function(req,res){
  res.header("Access-Control-Allow-Origin",'*')
  res.header("Access-Control-Allow-Methods:GET,POST,PUT,PATCH,DELETE,OPTIONS")
  Employerdata.find()
  .then(function(employer){
      res.send(employer)
  })
})

// --------------------------------Detailed faculty signup to Admin dashboard ---------------------------

app.get('/details/forverification/faculty', verifyToken,function(req,res){
  res.header("Access-Control-Allow-Origin",'*')
  res.header("Access-Control-Allow-Methods:GET,POST,PUT,PATCH,DELETE,OPTIONS")
  Facultydata.find()
  .then(function(faculty){
      res.send(faculty)
  })
})

// --------------------------------Job list  home page ---------------------------

app.get('/jobs', function(req,res){
  res.header("Access-Control-Allow-Origin",'*')
  res.header("Access-Control-Allow-Methods:GET,POST,PUT,PATCH,DELETE,OPTIONS")
  Jobpostdata.find()
  .then(function(job){
      res.send(job)
  })
})

// --------------------------------Confirm Alumni by admin ---------------------------
app.put('/update/alumni',verifyToken,(req,res)=>{
  
  id=req.body._id;
  email=req.body.email;
   console.log(email)
   //console.log(req.body)
  console.log(id);
   
 
  Alumnidata.findOneAndUpdate({"_id":id},
                               {$set:{"status":"confirmed"
                           }})
  .then(function(){
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      secure:false,
      port:25,
      auth: {
        user: 'snehajobinpaul@gmail.com',
        pass: 'Sneha#613'
      }
    });
    
    var mailOptions = {
      from: 'snehajobinpaul@gmail.com',
      to: req.body.email,
      subject: 'ICTAK Job portal confirmation',
      text: "This is to inform that you  have been authorized to use  ICTAK Job portal here onwards.You can apply for various job posts lised in the portal."
    };
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 
      res.send();
  })
 })

// --------------------------------Confirm Employer by admin ---------------------------
app.put('/update/employer',verifyToken,(req,res)=>{
  
  id=req.body._id;
  email=req.body.email;
  // console.log(id);
  // var id=Alumnidata.ObjectId(req.body._id)
  // const{id}=req.body
   // console.log(req.body)
   console.log(email)
   //console.log(id);
   
 
  Employerdata.findOneAndUpdate({"_id":id},
                               {$set:{"status":"confirmed"
                           }})
  .then(function(){
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      secure:false,
      port:25,
      auth: {
        user: 'snehajobinpaul@gmail.com',
        pass: 'Sneha#613'
      }
    });
    
    var mailOptions = {
      from: 'snehajobinpaul@gmail.com',
      to: req.body.email,
      subject: 'ICTAK Job portal confirmation',
      text: "This is to inform that you  have been authorized to use  ICTAK Job portal here onwards.You can post new job openings on the portal."
    };
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 

      res.send();
  })
 })

// --------------------------------Confirm Faculty by admin ---------------------------
app.put('/update/faculty',verifyToken,(req,res)=>{
  
  id=req.body._id;
  // console.log(id);
  // var id=Alumnidata.ObjectId(req.body._id)
  // const{id}=req.body
   //console.log(req.body)
   //console.log(id);
   
 
  Facultydata.findOneAndUpdate({"_id":id},
                               {$set:{"status":"confirmed"
                           }})
  .then(function(){
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      secure:false,
      port:25,
      auth: {
        user: 'snehajobinpaul@gmail.com',
        pass: 'Sneha#613'
      }
    });
    
    var mailOptions = {
      from: 'snehajobinpaul@gmail.com',
      to: req.body.email,
      subject: 'ICTAK Job portal confirmation',
      text: "This is to inform that you  have been authorized to use  ICTAK Job portal here onwards..You can post new job openings on the portal."
    };
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 
      res.send();
  })
 })


 // --------------------------------verified jobs to db---------------------------

app.put('/eligiblecandidates/candidates',verifyToken, (req, res) => {
  
  const id = req.body._id;
  const email=req.body.email;
  //console.log(email)
 // console.log(id)
    Appliedjobdata.findOneAndUpdate({"_id":id}, {$set:{"status":"verified"}})
    .then((verifiedcandidate)=>{
        res.send(verifiedcandidate);
       // console.log(verifiedcandidate)
    });
})
//------------------------get employer details to dashboard--------------------
 
app.get('/employerprofile/:item', verifyToken, (req, res) => {
  
  const email = req.params.item;
  //console.log(email)
    Employerdata.findOne({"email":email})
    .then((employer)=>{
        res.send(employer);
       // console.log(employer)
    });
})


//------------------------get faculty details to dashboard--------------------
 
app.get('/facultyprofile/:item',verifyToken,  (req, res) => {
  
  const email = req.params.item;
  //console.log(email)
    Facultydata.findOne({"email":email})
    .then((faculty)=>{
        res.send(faculty);
       // console.log(faculty)
    });
})

//------------------------get alumni details to dashboard--------------------
 
app.get('/alumniprofile/:item', verifyToken, (req, res) => {
  
  const email = req.params.item;
 // console.log(email)
    Alumnidata.findOne({"email":email})
    .then((alumni)=>{
        res.send(alumni);
       // console.log(alumni)
    });
})
//------------------------getjobs created  details to employer dashboard--------------------
 
app.get('/employercreatedjobs/:item', verifyToken, (req, res) => {
  
  const email = req.params.item;
 // console.log(email)
    Jobpostdata.find({"registeredEmail":email})
    .then((ejobs)=>{
        res.send(ejobs);
       // console.log(ejobs)
    });
})



//------------------------getjobs created  details to faculty dashboard--------------------
 
app.get('/facultycreatedjobs/:item', verifyToken, (req, res) => {
  
  const email = req.params.item;
 // console.log(email)
    Jobpostdata.find({"registeredEmail":email})
    .then((fjobs)=>{
        res.send(fjobs);
       // console.log(fjobs)
    });
})


//------------------------getjobs created  details to admin dashboard--------------------
 
app.get('/admincreatedjobs/:item', verifyToken, (req, res) => {
  
  const email = req.params.item;
  //console.log(email)
    Jobpostdata.find({"registeredEmail":email})
    .then((ajobs)=>{
        res.send(ajobs);
       // console.log(ajobs)
    });
})


//------------------------getjobs applied  details to alumni dashboard--------------------
 
app.get('/appliedtoalumni/:item',verifyToken,  (req, res) => {
  
  const email = req.params.item;
 //console.log(email)
    Appliedjobdata.find({"email":email})
    .then((alumnijobs)=>{
        res.send(alumnijobs);
       //console.log(alumnijobs)
    });
})





//------------------------get eligible candidates to employerdashboard--------------------
 
app.get('/eligibletoemployer/:item', verifyToken, (req, res) => {
  
  const email = req.params.item;
 //console.log(email)
    Appliedjobdata.find({"companyemail":email,"status":"verified"})
    .then((eligible)=>{
        res.send(eligible);
      // console.log(eligible)
    });
})


//------------------------get eligible candidates to admindashboard--------------------
 
app.get('/eligibletoadmin/:item', verifyToken, (req, res) => {
  
  const email = req.params.item;
// console.log(email)
    Appliedjobdata.find({"companyemail":email,"status":"verified"})
    .then((eligible)=>{
        res.send(eligible);
      // console.log(eligible)
    });
})


//------------------------get eligible candidates to facultydashboard--------------------
 
app.get('/eligibletofaculty/:item', verifyToken, (req, res) => {
  
  const email = req.params.item;
 //console.log(email)
    Appliedjobdata.find({"companyemail":email,"status":"verified"})
    .then((eligible)=>{
        res.send(eligible);
       //console.log(eligible)
    });
})
// --------------------------------Confirmed employername to home page---------------------------
app.get('/employernameforhome/:item',function(req,res){
  res.header("Access-Control-Allow-Origin",'*')
  res.header("Access-Control-Allow-Methods:GET,POST,PUT,PATCH,DELETE,OPTIONS")
  const status = req.params.item;
 // console.log(status)
  Employerdata.find({"status":"confirmed"})
  .then(function(employ){
      res.send(employ)
     // console.log(employ)
  })
})
// --------------------------------Deny Alumni by admin ---------------------------
app.delete('/remove/alumni/:id',verifyToken,(req,res)=>{
   
  id = req.params.id;
  Alumnidata.findOneAndDelete({"_id":id})
  .then(()=>{
    //  console.log('success')
    
       res.send();
  })
})


// --------------------------------Deny faculty by admin ---------------------------
app.delete('/remove/faculty/:id',verifyToken,(req,res)=>{
   
  id = req.params.id;
  Facultydata.findOneAndDelete({"_id":id})
  .then(()=>{
      //console.log('success')
       res.send();
  })
})

// --------------------------------Deny employer by admin ---------------------------
app.delete('/remove/employer/:id',verifyToken,(req,res)=>{
   
  id = req.params.id;
  Employerdata.findOneAndDelete({"_id":id})
  .then(()=>{
     // console.log('success')
       res.send();
  })
})

// --------------------------------Delete job post created by  admin ---------------------------
app.delete('/remove/adminjob/:id',verifyToken,(req,res)=>{
   
  id = req.params.id;
  Jobpostdata.findOneAndDelete({"_id":id})
  .then(()=>{
    // console.log('success')
       res.send();
  })
})

// --------------------------------Delete job post created by  empl ---------------------------
app.delete('/remove/employerjob/:id',verifyToken,(req,res)=>{
   
  id = req.params.id;
  Jobpostdata.findOneAndDelete({"_id":id})
  .then(()=>{
     //console.log('success')
       res.send();
  })
})
// --------------------------------Delete job post created by faculty ---------------------------
app.delete('/remove/facultyjob/:id',verifyToken,(req,res)=>{
   
  id = req.params.id;
  Jobpostdata.findOneAndDelete({"_id":id})
  .then(()=>{
    // console.log('success')
       res.send();
  })
})

// --------------------------------Get indv faculty page for confirmation ---------------------------

app.get('/details/indvfacreq/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
    Facultydata.findOne({"_id":id})
    .then((faculty)=>{
        res.send(faculty);
    });
})
// --------------------------------Get indv alumni page for confirmation ---------------------------

app.get('/indvalumreq/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
    Alumnidata.findOne({"_id":id})
    .then((alumni)=>{
        res.send(alumni);
    });
})



// --------------------------------Get indv alumni page for confirmation ---------------------------

app.get('/statusalum/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
    Alumnidata.findOne({"_id":id})
    .then((alumnistatus)=>{
       alumstatu=alumnistatus.status 
     //  console.log(alumstatu)
       if (alumstatu=="confirmed"){
         res.status(200).send();
       }
       else{
        res.status(400).send({message:"status is pending"});
       }
       
    });
})

// --------------------------------Get indv alumni page for confirmation ---------------------------

app.get('/statusfacu/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
    Facultydata.findOne({"_id":id})
    .then((facultystatus)=>{
       facstatu=facultystatus.status 
      // console.log(facstatu)
       if (facstatu=="confirmed"){
         res.status(200).send();
       }
       else{
        res.status(400).send({message:"status is pending"});
       }
       
    });
})


// --------------------------------Get indv alumni page for confirmation ---------------------------

app.get('/statusempl/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
    Employerdata.findOne({"_id":id})
    .then((employerstatus)=>{
       employstatu=employerstatus.status 
       // console.log(employstatu)
       if (employstatu=="confirmed"){
         res.status(200).send();
       }
       else{
        res.status(400).send({message:"status is pending"});
       }
       
    });
})
// --------------------------------Get status of resume for button disable on verification page -----------------

app.get('/resumeverified/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
    Appliedjobdata.findOne({"_id":id})
    .then((resumestatus)=>{
       resumestatu=resumestatus.status 
       // console.log(employstatu)
       if (resumestatu=="verified"){
         res.status(200).send();
       }
       else{
        res.status(400).send({message:"Details of candidate have not yet verified"});
       }
       
    });
})
// --------------------------------Get indv alumni page for confirmation ---------------------------

app.get('/indvemplreq/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
    Employerdata.findOne({"_id":id})
    .then((employer)=>{
        res.send(employer);
    });
})


// --------------------------------Get indv alumni page for confirmation ---------------------------

app.get('/indvjob/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
    Jobpostdata.findOne({"_id":id})
    .then((jobu)=>{
        res.send(jobu);
    });
})
//-----------------------retrieving aplied data for verification frm db-------------------------
app.get('/appliedforverification/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
  // console.log(id)
    Appliedjobdata.findOne({"_id":id})
    .then((appverification)=>{
        res.send(appverification);
    });
})
//-----------------------retrieving job applied  frm db to description page-------------------------
app.get('/appliedjobtodesc/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
 // console.log(id)
    Jobpostdata.findOne({"_id":id})
    .then((appliedforthis)=>{
    //console.log(appliedforthis);
      appliedtitle= appliedforthis.jobTitle;
     appliedcompany= appliedforthis.companyName;
     startdate=appliedforthis.startDate;
     enddate=appliedforthis.endDate;
     companyemail=appliedforthis.registeredEmail
      //console.log(appliedcompany);
      //console.log(appliedtitle);
     // console.log(startdate)
     // console.log(enddate)
     // console.log(companyemail)
      Appliedjobdata.find({companyname:appliedcompany,jobtitle:appliedtitle,companyemail:companyemail,startdate:startdate,enddate:enddate})
        .then((applieddescription)=>{
          res.send(applieddescription);
    });
})
})



// --------------------------------Get indv eligible page for admin dashboard  ---------------------------

app.get('/eligibletoadmindividual/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
  // console.log(id)
    Appliedjobdata.findOne({"_id":id})
    .then((egtoadminind)=>{
        res.send(egtoadminind);
    });
})

// --------------------------------Get indv eligible page for employer dashboard  ---------------------------

app.get('/eligibletoemplindividual/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
  // console.log(id)
    Appliedjobdata.findOne({"_id":id})
    .then((egtoemplind)=>{
        res.send(egtoemplind);
    });
})

// --------------------------------Get indv eligible page for employer dashboard  ---------------------------

app.get('/eligibletofacultyindividual/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
  // console.log(id)
    Appliedjobdata.findOne({"_id":id})
    .then((egtoemplind)=>{
        res.send(egtoemplind);
        //console.log(egtoemplind)
    });
})
// --------------------------------Get employer profile for employer dashboard ---------------------------


app.listen(9500,function(){
    console.log("listening to port 9500")
})
