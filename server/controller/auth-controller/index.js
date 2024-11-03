const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")




const registerUser = async(req,res) =>{
    const {userName,userEmail,password,role} = req.body;

    const existingUser = await User.findOne({$or: [{userEmail},{userName}],
    });

    if(existingUser){
        return res.status(400).json({
            success : false,
            message:"user already exists",
        })
    }
     const hashpassword = await bcrypt.hash(password , 10);
     const newUser  = new User ({userName,userEmail, role, password:hashpassword })

     await newUser.save();
     console.log(newUser)

     return res.status(201).json({
        success:true,
        message: " user regestred sucessfully!",
        
     })

}

//creating the middleware for the login and redirected 

const loginUser = async(req,res) => {
    const {userEmail,password } = req.body;

    const checkUser = await User.findOne({userEmail});
    if(!checkUser || !(await bcrypt.compare(password,checkUser.password))){
        return res.status(401).json({
    success:false,
    message:"user already exists"
});
}   

    const accessToken = jwt.sign({
        _id:checkUser._id,
        userName:checkUser.userName,
        userEmail: checkUser.userEmail,
        role:checkUser.role,

    },
    "JWT_SECRET",
    {
        expiresIn:"120m"
    })
    res.status(200).json({

        success:true,
        message:"login in sucessfully",
        data:{
            accessToken,
            user:{
                _id:checkUser._id,
                userName:checkUser.userName,
                userEmail: checkUser.userEmail,
                role:checkUser.role, 

            }
        },
    });
};
module.exports = { registerUser,loginUser};