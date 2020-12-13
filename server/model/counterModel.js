const mongoose = require("mongoose");
const {Schema} = mongoose; //extract Schema from Mongoose
const CounterSchema = new Schema({  // rules for the crewSchema
    value:{
        type: Number
    }
}) 
mongoose.model("counter", CounterSchema); // don't need to export it 
