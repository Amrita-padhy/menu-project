
import './App.css';
import React,{useEffect, useState} from 'react';
import items from './data';
import Menu from './menu';
import Catagories from './catagories';

const allCategories = ["all",...new Set(items.map((item) => item.category))]
console.log(allCategories);


function App() {
const [menuItems,setMenuItems] = useState(items)
const [catagories,SetCatagories] = useState(allCategories)




const filterItems = (category) => {
  if (category === "all") {
    setMenuItems(items)
    return
  }
  const newItems = items.filter((item)=>item.category === category)
  setMenuItems(newItems)
}

return (
  <main className='menu_section'>
    <div className="title">
      <h2>Our menu</h2>
      <div className="underline"></div>
    </div>
    <Catagories catagories={catagories} filterItems = {filterItems}/>
    <Menu items= {menuItems}/>
  </main>

)

  
}

export default App;
