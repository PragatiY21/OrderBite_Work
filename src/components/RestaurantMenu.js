import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { useState,useEffect } from "react";
import {MENU_API} from "../utils/constants"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{

    
// const [resInfo, setResInfo] = useState(null);

 const {resId} = useParams();

 const resInfo = useRestaurantMenu(resId);
   // console.log(resId);
//  useEffect (() =>{
//     fetchMenu();
// },[]);

// const fetchMenu = async () =>{
//     const data = await fetch(MENU_API + resId);
//     console.log("24--",data);

//  const json = await data.json();
// console.log("25--",json);
// setResInfo(json.data);
// };

//const {name,cuisines, costForTwo} = resInfo?.cards[2]?.card?.card?.info;
if (resInfo === null) return <Shimmer/>;

const {name,cuisines,costForTwo} =resInfo?.cards[2]?.card?.card?.info;
//console.log(name,cuisines,costForTwo);
const {itemCards} = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
//console.log("catogaries",resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
const categories=resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//console.log(categories);
    return (

        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">  {name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwo}
            
            </p>
            {/* categories accordian */}
            {/* constrolled component */}
            {categories.map((category)=>(<RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={false}/>))}
           
        </div>

    )
}
export default RestaurantMenu;







// {itemCards.map((item) => (<li
//     key ={item.card.info.id}>
//     {item.card.info.name}-{" Rs"}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))}
{/* <li>{itemCards[0].card.info.name}</li>
<li>{itemCards[1].card.info.name}</li>
<li>{itemCards[2].card.info.name}</li> */}

