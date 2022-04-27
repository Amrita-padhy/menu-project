import React from "react";


const Catagories = ({filterItems,catagories})=> {
return (
    <div className="button_container"> 
    {
        catagories.map((category,index)=>{
            return <button onClick={()=>filterItems(category)} type="button" className="filter_btn" key={index} >
                {category}
            </button>
        })
    }
    </div>
)
}

export default Catagories