const User = require("../../models/User");
const bcrypt = require("bcryptjs");





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

module.exports = { registerUser};