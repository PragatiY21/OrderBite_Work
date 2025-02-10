import { useState } from "react"
import ItemList from "./ItemList"
const RestaurantCategory=({data,showItems})=>{

    //controlled and uncontrolled component
    //if component have self state the it is called uncolled component
    //when parent is controlling the childern then it is called controlled component
//     const [showItems, setShowItems] = useState(false);
// const handleClick =()=>
// {
//     setShowItems(!showItems);
// }
 
    return(
        <div>
            {/* Accordian header */}
            
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
         <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{data.data.title} ({data.data.itemCards.length})</span>
          <span>⬇️ </span>
          </div>
       {showItems && <ItemList items={data.data.itemCards}/>} 
            </div>
            {/* Accordian Body */}
        </div>
    )

}
export default RestaurantCategory;