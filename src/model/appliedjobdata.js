const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/jobportal');

const schema=mongoose.Schema;
const appliedjobschema=new schema({
    jobtitle:String,
    companyname:String,
    startdate:String,
    enddate:String,
    companyemail:String,
    firstname:String,
    lastname:String,
    email:String,
    phone:Number,
    gender:String,
    experience:Number,
    resume:String,
    resumefile:String,
    onlinelink:String,
    skillone:String,
    skilltwo:String,
    skillthree:String,
    skillfour:String,
    skillfive:String,
    skillsix:String,
    passout:Number,
    qualifications:String,
    status:String
 
});
mongoose.model('appliedjobdata',appliedjobschema);
var appliedjobdata=mongoose.model('appliedjobdata',appliedjobschema);
module.exports=appliedjobdata;