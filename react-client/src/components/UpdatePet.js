import React,{useState} from 'react'
import axios from 'axios'

function UpdatePet({petToUpdate,togli,switchView}) {
    const [name,setName]=useState(petToUpdate.name)
    const [age,setage]=useState(petToUpdate.age)
    const [race,setrace]=useState(petToUpdate.race)
    const [desc,setdesc]=useState(petToUpdate.description)
    const [cat,setcat]=useState(petToUpdate.category)
    const [img,setimg]=useState(petToUpdate.imageUrl)
    const [phone,setphone]=useState(petToUpdate.contact_owner)

    return (
    <div >
       <center> 
        <h1>Update Pet</h1>
            <table>
                <tbody>
                    <tr>
                        <td>name</td>
                        <td><input className='input'  type='text'  defaultValue={petToUpdate.name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                        /></td>
                    </tr>
                    <tr>
                        <td>age</td>
                        <td><input className='input' type='text'  defaultValue={petToUpdate.age}
                        onChange={(e)=>{
                            setage(e.target.value)
                        }}
                        /></td>
                    </tr>
                    <tr>
                        <td>race</td>
                        <td><input className='input' type='text' defaultValue={petToUpdate.race}
                        onChange={(e)=>{
                            setrace(e.target.value)
                        }}
                        /></td>
                    </tr>
                    <tr>
                        <td>description</td>
                        <td><input className='input' type='text' defaultValue={petToUpdate.description}
                        onChange={(e)=>{
                            setdesc(e.target.value)
                        }}
                        /></td>
                    </tr>
                    <tr>
                        <td>categorie</td>
                        <td><input className='input' type='text'  defaultValue={petToUpdate.category}
                        onChange={(e)=>{
                            setcat(e.target.value)
                        }}/></td>
                    </tr>
                    <tr>
                        <td>image   </td>
                        <td><input className='input' type='text' defaultValue={petToUpdate.imageUrl}
                        onChange={(e)=>{
                            setimg(e.target.value)
                        }}/></td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td><input className='input' type='number' defaultValue={petToUpdate.contact_owner}
                        onChange={(e)=>{
                            setphone(e.target.value)
                        }}/></td>
                    </tr>
                    <tr>
                        
                        <td colSpan='2'><center><input className='button' type='button' value='Update MY Pet '
                        onClick={()=>{
                            axios.put('http://localhost:5000/api/Pet/'+petToUpdate._id,
                            {
                                name:name,
                                age:age,
                                race:race,
                                contact_owner:phone,
                                description:desc,
                                category:cat,
                                imageUrl:img


                            }
                            
                            ).then((reslt)=>{
                                console.log(reslt);
                                togli()
                                switchView("Petliste")
                            }).catch(err=>console.log(err))
                        }}
                        /></center></td>
                    </tr>
                </tbody>
            </table>
            </center>
    </div>
  )
}

export default UpdatePet