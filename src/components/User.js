import { useState } from "react"; 

const User = (props) =>{
//const User = ({name}) =>{return ( <div className="user-card"> <h1>name:{name}</h1></div>

const [count] =useState(0);
const [count2] =useState(1);
return (
    
<div className="user-card">
<h1>count ={count}</h1>
<h1>count ={count2}</h1>
<h1>name:{props.name}</h1>
<h2>Address</h2>
<h2>Contact number</h2>

</div>

);
};
export default User;