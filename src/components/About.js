import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";



// componentDidMount() {

//     console.log("Child componentDidMount");
//   }

class About extends Component{
constructor(props){
    super(props);
    
        console.log("parent constructor");
    

}

componentDidMount(){
    console.log("parent componentDidmount");
}

render(){

    console.log("parent render");
    return(
        <div>
        <h1>About us</h1>
        <div>
loggedIn User
     <UserContext.Consumer>
        {({loggedInUser})=><h1>{loggedInUser}</h1>}
     </UserContext.Consumer>

        </div>
        <h2>The is about us page</h2>
        {/* <User name={"Pragati Yadav(Function)"}/> */}
        <UserClass name ={"First"} location={"second"} />
        {/* <UserClass name ={"Elon Musk(Class)"}/> */}

        </div>
    
    
    );
}
  


    

};

export default About;

//Parent constructor
//Parent render
// Pragati Child constructor
// Pragati Child render
// Elon Musk Child constructor
// Elon Musk Child render

 // DOM is updated -in a single Batching 
// Pragati Child componentDidMount
// Elon Child componentDidMount
// Parent componentDidMount