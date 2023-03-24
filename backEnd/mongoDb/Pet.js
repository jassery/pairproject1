const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const petSchema = new mongoose.Schema({
    name: String,
    age:String,
    race:String,
    contact_owner:Number,
    description: String,
    imageUrl: String,
    
    category: {
      type: String,
      enum: ["dogs", "cats", "birds"],
      default: "dogs"
    },
    
  });
  
const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;