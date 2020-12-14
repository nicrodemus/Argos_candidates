const mongoose = require("mongoose");
const {Schema} = mongoose; //extract Schema from Mongoose
const crewSchema = new Schema({  // rules for the crewSchema
    name:{
        type: String
    },
    age:{type: Number},
    job:{type: String}
}) 
mongoose.model("crew", crewSchema); // don't need to export it 
