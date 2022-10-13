
const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");



router.post("/register", async(req,res)=>{
    const {name, email, age,mobile,work,address,desc} = req.body;

    if(!name || !email || !age || !mobile || !work || !address || !desc){
        return res.status(206).json({Error : "data is missing "});
    }
    try {

        const existEmail = await UserModel.findOne({email})
        if(!existEmail){

            const user = await UserModel.create({
                name,
                email,
                age,
                mobile,
                work,
                address,
                desc
            })

            return res.status(201).json({msg : "user created successfully"}); 
        }else{
            return res.status(400).json({msg : "Eamil is already exist"});
        }
        
    } catch (error) {
        return res.status(500).json(error);
    }
})



router.get("/getUser",async(req,res)=>{
    try {
        const userData = await UserModel.find();
        return res.status(200).json(userData);
    } catch (error) {
        return res.status(500).json(error);
    }
})


router.get("/getAUser/:id",async(req,res)=>{
    try {
        const {id} = req.params
        const individualUser = await UserModel.findById({_id : id})
        return res.status(201).json(individualUser);
    } catch (error) {
        return res.status(404).json({msg : "user not found"})
    }
})

router.patch("/updateUser/:id",async(req,res)=>{
    try {
        
        const {id} = req.params;
        const user = await UserModel.findByIdAndUpdate(id , req.body, {new : true});
        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json("internal server error");
    }
})

router.delete("/deleteUser/:id",async(req,res)=>{
    try {

        const {id} = req.params;
        const deleteUser = await UserModel.findByIdAndDelete({_id : id});
        return res.status(201).json(deleteUser);
        
    } catch (error) {
        return res.status(500).json("internal server error ");
    }
})


module.exports = router;