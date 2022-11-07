const Route = require("express").Router();
const { user } = require("./db");
const JWT = require("jsonwebtoken");



Route.post("/signUp", async(req,res)=>{
    const {userName , password} = req.body
    // console.log(userName , password);

    const token = await JWT.sign(
        {userName,}, "abcdefghijk"
    )
    let userExistence= user.find((users)=>{
        return (users.userName=== userName && users.password=== password);
       })
       if(userExistence){
        return res.send("user is already existed");
       }
       user.push({userName,password ,token});
       res.send("registered succusfully ...");
       console.log(user);
    //    console.log(userExistence);
       
})

module.exports = Route;