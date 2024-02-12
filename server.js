const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const multer=require("multer");
const app=express();
const jwt=require("jsonwebtoken");
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
  //  console.log(req.body);
let userData=await User.find().and({email:req.body.email}) ;

if(userData.length>0){
 if(req.body.password===userData[0].password){
       res.json({status:"Success", data:userData});
}else{
    res.json({status:"Failure",msg:"Invalid password"});
  }
}else{
res.json({status:"Failure",msg:"Invalid Username"});
}
});

app.put("/editProfile",upload.single("profilePic"),async(req,res)=>{
  try{ 
  
   if(req.body.firstName.length>0){
    await User.updateMany(
      {email:req.body.email},
      {firstName:req.body.firstName,
      }
    );
   }
   
   if(req.body.lastName.length>0){
    await User.updateMany(
      {email:req.body.email},
      {
        lastName:req.body.lastName,
      }
    );
   }
   if(req.body.mobileNumber.length>0){
    await User.updateMany(
      {email:req.body.email},
      {
        mobileNumber:req.body.mobileNumber,
      }
    );
   }
   if(req.body.city.length>0){
    await User.updateMany(
      {email:req.body.email},
      {
        city:req.body.city,
      }
    );
   }
  
   if(req.body.password.length>0){
    await User.updateMany(
      {email:req.body.email},
      {
        passWord:req.body.password,
      }
    );
   }
   
   if(req.file.path.length>0){
    await User.updateMany(
      {email:req.body.email},
      {
        profilePic:req.file.path,
      }
    );
   }
   if(req.body.city.length>0){
    await User.updateMany(
      {email:req.body.email},
      {
        city:req.body.city,
      }
    );
   }
   
    res.json({status:"Success",msg:"User details updated successfully"});
  
  }catch(err){
    console.log(err);
  
    res.json({status:"Failure",msg:"Unable to updated details"});
  }
    
  });
  
  app.delete("/deleteUser",async(req,res)=>{
  try{
    await User.deleteMany({email:req.query.email});
    res.json({status:"Success",msg:"User deleted successfully"});
  }catch(err){
    res.json({status:"Failure",msg:"Unable to delete user"});
  }
  })
  

app.listen("1234",()=>{
    console.log("Listening port 1234");
});
connecteToMDB();