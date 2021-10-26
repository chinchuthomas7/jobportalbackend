// Accessing mongoose
const mongoose=require('mongoose');
//Database connection
//mongoose.connect('mongodb+srv://userone:userone@ictakprojectfiles.z0atk.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/jobportal');
//Schema creation
const Schema=mongoose.Schema;
const FacultySchema = new Schema({
    register:String,
    name:String,
    email:String,
    phonenumber:String,
    password:String,
    passwordcheck:String,
    info:String,
    image:String,
    imgfile:String,
    status:String,
//    _id: String
   
    
    
});
//Model creation
var Facultydata=mongoose.model('Facultydata',FacultySchema);
module.exports=Facultydata;