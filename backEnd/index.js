const express = require('express');
const cors =require('cors');
const port = 5000;
const app = express();
const db = require('./mongoDb');
const {getAllPet,getOne,deleteOne,updatePet,addPet }=require('./mongoDb/index.js')
app.use(cors());
app.use(express.json())


app.get('/api/Pet',getAllPet)
app.get('/api/Pet/:name',getOne)
app.post('/api/Pet/add',addPet)
app.put('/api/Pet/:id',updatePet)
app.delete('/api/Pet/:id',deleteOne)




app.listen(port, ()=>{
console.log(`listening on ${port}`);
})