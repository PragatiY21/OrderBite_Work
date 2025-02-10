import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) =>{
    //  console.log(props);
    const {resData} =props;
  
    const {cloudinaryImageId,id,name,avgRating} =resData?.info;
  return(
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
         <img 
         className="rounded-lg" 
         alt= "res-logo" 
         src ={CDN_URL+ cloudinaryImageId }
           />
    
  

      
      <h4 className="bold">{name}</h4>
      <h4>{avgRating}</h4>
      <h4>48 mins</h4>
      </div>
  )
    }

    //Higher Order Component
    //input - RestaurantCard => return ==>RestaurantCardPromoted
export const withPromotedLabel =(RestaurantCard)=>{
return (props)=>{
  return(
<div>
  <label className="absolute bg-black text-white m-2 p-2 rounded-lg"> Promoted</label>
  <RestaurantCard {...props}/>
</div>

  );
};

};

    export default RestaurantCard;