
import axios from 'axios'
import React, { useState } from 'react'


function AddPet({togli,switchView}) {
const [url,setUrl]=useState("")
const [name,setName]=useState("")
const [desc,setDesc]=useState("")
const [contact_owner,setcontact_owner]=useState(0)

const zid =()=>{
    axios.post("http://localhost:5000/api/Pet/add",{name:name,age:desc,imageUrl:url,contact_owner:contact_owner}).then((reslt)=>{
console.log(reslt)
togli()
switchView("Petliste")
    }).catch((err)=>{
      console.log(err)
    })


  }


  return (
    <center> 
      <table>

     

    <div className='input'>   


<input className='input' type="text" placeholder='url' onChange={(e)=>{setUrl(e.target.value)}}/> 
<input className='input' type="text" placeholder='name' onChange={(e)=>{setName(e.target.value)}} /> 
<input className='input' type="text" placeholder='age' onChange={(e)=>{setDesc(e.target.value)}}/>  
<input className='input' type="number" placeholder='phone' onChange={(e)=>{setcontact_owner(e.target.value)}}/> 
<center>
<input  className='button'  type="button" value="Add Pet" onClick={zid}/>
</center>

    </div>
    </table>
    </center>
    
  )
}

export default AddPet