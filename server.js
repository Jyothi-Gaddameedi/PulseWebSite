const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const multer=require("multer");
const app=express();

app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {

      cb(null, `${Date.now()}_${file.originalname}`);
    }
  })
  
  const upload = multer({ storage: storage })

  app.use('/uploads', express.static('uploads'))


let connecteToMDB=async()=>{
  try{
    await  mongoose.connect("mongodb+srv://gjyothi779:gjyothi779@cluster0.lmcmkzn.mongodb.net/PulseWebApplicationDB?retryWrites=true&w=majority");
       console.log("Successfully connected to MDB");
    }catch(err){
      console.log(err);  
      console.log("Unable to connect to MDB");
    }
}
let userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobileNumber:String,
    city:String,
    profilePic:String,
    email:String,
    password:String,
    state:String,
});
let User=new mongoose.model("user", userSchema);

app.post("/signup",upload.single("profilePic"),async(req,res)=>{
    console.log("Received Data");
    console.log(req.body);
    console.log(req.file);  
  try{
    let newUser=new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        mobileNumber:req.body.mobileNumber,
        city:req.body.city,
        profilePic:req.file.path,
        email:req.body.email,
        password:req.body.password,
        state:req.body.state,
    });
   let userData=await User.find().and({email:req.body.email});
   
   if(userData.length>0){
    res.json({status:"Failure", msg:"User account already exists"});
   }else{
    await User.insertMany([newUser]);
    console.log("User created Successfully");
    res.json({status:"Success",msg:"User created Successfully"});
   }
  }catch(err){
    console.log(err);
    console.log("Unable to create User");
    res.json({status:"Failure",msg:"Unable create User"});
  }  
});
app.post("/validateLogin",upload.none(),async(req,res)=>{
  console.log(req.body);
let userData=await User.find().and({email:req.body.email}) ;

if(userData.length>0){
 if(req.body.password===userData[0].password){
   res.json({status:"Success",data:userData})
  }else{
    res.json({status:"Failure",msg:"Invalid password"});
  }
}else{
res.json({status:"Failure",msg:"Invalid Username"});
}
});

app.listen("1234",()=>{
    console.log("Listening port 1234");
});
connecteToMDB();