import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body =() =>{

  //local state variable
const [listOfRestaurants , setlistOfRestaurants] = useState ([]);
const [filteredRestaurant,setfilteredRestaurant] = useState([]);
//whenever state variable update, react triggers a reconciliation cycle (re-renders the component )
const [searchText, setsearchText] =useState("");

//promoted
const RestaurantCardPromoted =withPromotedLabel(RestaurantCard);

console.log("BodyRendered:",listOfRestaurants);

useEffect( () => {
fetchData();
///Connection with nodejs api student

// fetchDataStudents();
}, []);

const fetchData = async () => {
  const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json =await data.json();
  console.log(json);
  setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

///Connection with nodejs api student
// const fetchDataStudents = async () => {
//   const data = await fetch ("http://localhost:3000/students");
//   const json =await data.json();
//   console.log("students",json);
 
// };

const OnlineStatus=useOnlineStatus();
if (OnlineStatus === false) 
return(<h1>Looks like you are offline</h1>);


// if(listOfRestaurants.length === 0)
// {
//   return <Shimmer/>;
// }
  //normal variable
  // let listOfRestaurants =[ {
  //   data : {
  //     id: "332521",
  //     cloudinaryImageId: "wa8a7irojeoame4wv9yi",
  //     name: "Bikanervala",
  //     avgRating: 4.3,
  //   }
  // },
  // {
  //   data : {
  //     id: "332555",
  //     cloudinaryImageId: "wa8a7irojeoame4wv9yi",
  //     name: "KFC",
  //     avgRating: 3,
  //   }
  // },
  // {
  //   data : {
  //     id: "332522",
  //     cloudinaryImageId: "wa8a7irojeoame4wv9yi",
  //     name: "PIZZAHUT",
  //     avgRating: 4.1,
  //   }
  // }
//]
//console.log(listOfRestaurants);
//using ternarary operator
 //const onlineStatus = useOnlineStatus();
// if(onlineStatus === false) return <h1> looks like you are offline</h1>


    return listOfRestaurants.length === 0 ? (<Shimmer/>): (
      <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">

        <input type ='text' className ="border border-solid border-black" value={searchText} onChange={(e)=> {setsearchText(e.target.value);}}/>
      
       
        <button  className=" px-4 py-2 bg-green-100 m-4 rounded-lg"
        onClick={()=>{

          // onclick the button update the restaurant card and update the Ui 
          const fiteredRestaurant =listOfRestaurants.filter((res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
          setfilteredRestaurant(fiteredRestaurant);
        }}>Search</button>
          </div>
 <div className="search m-4 p-4 flex items-center">
 <button 
//family.filter(person => person.age > 18);

className=" px-4 py-2 bg-gray-100" onClick={() => {
    
  const filteredlist =listOfRestaurants.filter(
  (res)=> res.info.avgRating > 4);

  setlistOfRestaurants(filteredlist);
  console.log(listOfRestaurants);
  
} } 
  > Top Rated Restaurant
  </button>
  </div>         


      </div>
      <div  className="flex flex-wrap">
  {
    filteredRestaurant.map((restaurant) => (<Link key={restaurant.info.id} to={"/restaurant/" +restaurant.info.id }>
     {/* If restaurant is promoted add a promotion a label to it */}
     {
      restaurant.info.isOpen ? <RestaurantCardPromoted resData={restaurant}/> :  <RestaurantCard  resData={restaurant}/>
     }
     
      </Link>) )
  }
         
       
      
      </div>
      </div>
    )
  }

  export default Body;