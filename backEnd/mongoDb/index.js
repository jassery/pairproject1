const mongoose = require("mongoose");
const Pet =require('./Pet.js');
const mongoUri = "mongodb://127.0.0.1/Pet";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;

const getAllPet = (req,res) => {
Pet.find().then ((result)=>{
  res.status(200).json(result)
}).catch((err)=>{
  res.status(500).json(err)
})
};


const getOne = (req,res) => {
  Pet.findOne({name:req.params.name}).then ((result)=>{
    res.status(200).json(result)
  }).catch((err)=>{
    res.status(500).json(err)
  })
};

const deleteOne =(req,res)=>{
  Pet.deleteOne({_id:req.params.id}).then((reslt)=>{
    res.send(reslt)
  }).catch((err)=>{
    res.send(err)
  })
}


const updatePet =(req,res)=>{
  Pet.updateOne({_id:req.params.id},req.body).then((reslt)=>{
    res.send(reslt)
  }).catch((err)=>{
    res.send(err)
  })
};

const addPet =(req,res)=>{
  Pet.create(req.body).then((reslt)=>{
    res.send(reslt)
  }).catch((err)=>{
    res.send(err)
  })
};




module.exports = {
  db,
  getAllPet ,
  getOne,
  deleteOne,
  updatePet,
  addPet
};
