// Accessing mongoose
const mongoose=require('mongoose');
//Database connection
//mongoose.connect('mongodb+srv://userone:userone@ictakprojectfiles.z0atk.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/jobportal');
//Schema creation
const Schema=mongoose.Schema;
const JobpostSchema = new Schema({
    companyName:String,
    jobTitle:String,
    registeredEmail:String,
    startDate:String,
    endDate:String,
    qlfnItem:[String],
    passItem:[Number],
    experience:[String],
    skillItem:[String],
    infor:String,
    companyinfor:String,
    
   
    
    
});
//Model creation
var Jobpostdata=mongoose.model('Jobpostdata',JobpostSchema);
module.exports=Jobpostdata;