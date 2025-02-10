import React from "react";

class UserClass extends React.Component{

constructor (props){
    super(props);
  //  console.log(props);
  // this.state ={
  //   count:0,
  //   count2:2,
  
  // };

  this.state={
    userInfo:{
      name: "Dummy",
      location:"Default",
    },
  };
 console.log("Child Constructor");
}

async componentDidMount() {

  console.log("Child componentDidMount");  //it is used to make api call
  const data =await fetch("https://api.github.com/users/akshaymarch7");
  const json = await data.json();

  this.setState({
  userInfo: json,
 });
  console.log(this.state.userInfo);
}

componentDidUpdate(){
  console.log("component didd update");
}

componentWillUnmount(){

  console.log("unmount");
}
render(){

   // const {name} = this.props;
   // const {count} =this.state;

   const {name,location} = this.state.userInfo;
    console.log("Child render");
return (
    <div className="user-card">
    {/* <h1>{this.props.name}</h1>  */}
   
    {/* <h1>count : {this.state.count2}</h1> */}
    {/* <h1>count : {count}</h1> */}
    {/* <button onClick={() => {
        this.setState({ count : this.state.count + 1,
         });
                     }}
    >count increase</button> */}
    {/* <h1>{name}</h1> */}

    
    <h1>name : {name}</h1> 
    <h2>location : {location}</h2>
    <h2>Contact number</h2>
    
    </div>
    
    );
}
};

export default UserClass;


// Child constructor
// Child render
// Child componentDidMount