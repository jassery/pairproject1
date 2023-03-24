import './App.css';
import Search from "./components/Search";
import Petliste from "./components/Petliste"
import { useEffect, useState } from 'react'
import AddPet from './components/AddPet';
import UpdatePet from './components/UpdatePet';
import Petdetails from './components/Petdetails'
import axios from 'axios';
const App = () => {
    
  const [toggler, setTogler] = useState(false);
  const [petToUpdate, setpetToUpdate] = useState({});
const [data,setData]=useState([])
const getAll=()=>{
axios.get('http://localhost:5000/api/Pet').then(({data})=>{
  setData(data)
}).catch(err=>console.log(err))
}
const getPet =(pet)=>{
  setpetToUpdate(pet)
}
useEffect(()=>{
getAll()
},[toggler])



const [menuView, setMenuView] = useState(false);

const [view,setView] = useState("Petliste");
const [term,setTerm] = useState("Petliste");
const [dataTorender,setdataTorender] = useState([]);
const filterData=()=>{
  setdataTorender(
    data.filter((e)=>{
      return e.name ===term
    })
  )
}

useEffect(()=>{
  filterData()
},[term])
const toggleMenu = ()=> {
  setMenuView(!menuView)
}
const switchView = (x) => {
  setView(x)
}
const getTerm = (option)=>{
  setTerm(option)
}
const togli = ()=>{
  setTogler(!toggler)
}
console.log(dataTorender);
  return (
    <div className="App">
        <div className="nav">
          <span className="logo" onClick={()=>switchView ("Petliste")}>Pets House</span>
          { view ==="Petliste" &&<Search getTerm={getTerm}/>}


        { view ==="Petliste" && <span className="items" onClick={toggleMenu}>
         
        <span className='menu-item' onClick={()=>setData(data.filter(e=>e.category==="dogs"))}>DOGS</span>
           
          </span>}
          { view ==="Petliste" && <span className="items" onClick={toggleMenu}>
         
            
            <span className='menu-item' onClick={()=>setData(data.filter(e=>e.category==="cats"))}>CATS</span>
           
          </span>}
          { view ==="Petliste" && <span className="items" onClick={toggleMenu}>
         
          <span className='menu-item'onClick={()=>setData(data.filter(e=>e.category==="birds"))}>BIRDS</span>
          </span>}
          
          <span className="items" onClick={()=>switchView ("ADD PET")}>
           ADD PET
          </span>
          </div>
      
          
          {view ==="Petliste" && dataTorender.length===0 ? 
          <Petliste data={data} switchView={switchView} getPet={getPet} togli={togli}/>
          :<Petliste data={dataTorender} switchView={switchView} getPet={getPet} togli={togli}/>
          }
          {view ==="ADD PET" && <AddPet  togli={togli} switchView={switchView}/>}
          {view ==="UpdatePet" && <UpdatePet petToUpdate={petToUpdate} togli={togli} switchView={switchView}/>}
          {view ==="petDetails" && <Petdetails petToUpdate={petToUpdate} togli={togli} switchView={switchView}/>}
    </div>
  );
}

export default App;
