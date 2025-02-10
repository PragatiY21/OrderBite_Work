import {LOGO_URL} from "../utils/constants";
import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header =() =>
  {
    const [btnNameReact, setbtnNameReact] = useState("login");
    const OnlineStatus =useOnlineStatus();
const {loggedInUser}=useContext(UserContext);
//subscribing to the store using selector
const cartItems =useSelector((store)=>store.cart.items);
console.log(cartItems);
    return(
       
//"header"
      <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-green-50">  
         <div className="logo-container">
         <img className="w-56" src= {LOGO_URL} />
         </div>
         <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">online status :{OnlineStatus ? "✅" : "🔴"}</li>
            <li className="px-4"> <a href="/">Home</a></li>
            <li className="px-4"> <Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
            <li className="px-4"><Link to="/cart">Cart ({cartItems.length} item)</Link></li>
            <button className = 'login' onClick={() => {
             btnNameReact=== "login" ? setbtnNameReact("logout") : setbtnNameReact("login");

            }}>{btnNameReact}</button>
            <li className="px-4">{loggedInUser}</li>


          </ul>
         </div>
    </div>

    )

  }

  export default Header;