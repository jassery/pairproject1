import React, { useState } from 'react'
const Search = ({getTerm}) => {
    const [serched,setSerched] = useState('')
    return (
        <div className='searchForm'>
            <input type="text" placeholder="looking for ..." className='search' 
            onChange={(e)=>{
                setSerched(e.target.value) 
            }}
            />
            <button className='searchButton'
            onClick={()=>{
                getTerm(serched) 
            }}
            >&#x1F50E;</button>
        </div>
    )
}
export default Search