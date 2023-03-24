import React from 'react';
import data from "../data.json";
import axios from 'axios';

const Petliste = ({data,switchView,getPet,togli}) => {
  
   
   
    return (
   
        <div>


        <div className='pets-list'>
           


            {data.map((e,i)=>{
                return(


                    <div className="pet-card">

<img src={e.imageUrl} onClick={()=>{
    switchView('petDetails')
    getPet(e)
}} />
                <h2>{e.name}</h2>
                <p>{e.age}</p>
            
                <p className='card-item-price'>{e.race}</p>
                <p className='card-item-cat'>{e.category}</p>
                <p> {e.contact_owner}</p>
                <div className="pet-card-buttons">
                    <button
                    onClick={()=>{
                        switchView("UpdatePet")
                        getPet(e)
                    }}
                    >Update Pet</button>
                    <button onClick={()=>{
                    axios.delete("http://localhost:5000/api/Pet/"+e._id).then((reslt)=>{
                        togli()
                    }).catch((err)=>{
                      console.log(err)
                        })

                    }} >Delete Pet</button>
                    <button 
                    
                    onClick={()=>{
                        switchView("petDetails")
                        getPet(e)
                    }}
                    
                    >Read More</button>
                </div>
            </div>


                )



})}


                
        
        </div>
        </div>
    )
}

export default Petliste