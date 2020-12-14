const mongoose = require("mongoose");
const app = require("../app");
const CrewMember = mongoose.model("crew");
module.exports = app =>{
    app.post("/api/candidates",async(req,res) =>{
        console.log(req.body);
        try{
        const {name,age,job} = req.body;
       
        console.log(name);
        let member = new CrewMember({
            name,
            age,
            job,
        });
        await member.save();
        res.send(member);
        }catch(err){
            console.log(err)
        }

    })

    app.get("/api/crew",async(req,res) =>{
        try{
            const response = await CrewMember.find({});
            console.log(response);
            const arrayResponse = response.map(({name}) =>name)
            res.send(response)
        }catch(err){
            console.log(err)
        }
    })
}