const { user } = require("./db");

const Login = require("express").Router();



Login.post("/login", (req,res)=>{
    const { userName , password } = req.body;

    let userExistence= user.find((users)=>{
        return (users.userName=== userName && users.password=== password);
       })
       if(!userExistence){
        return res.send("user is not existed please sign-Up");
       }
       res.send("user Logged-in successfully");
})

module.exports = Login;