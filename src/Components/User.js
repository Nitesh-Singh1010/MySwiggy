import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // object that maintains all state variables
    // this.state = {
    //   count1: 0,
    // };
    // console.log(this.props.name,"child component constructor")
    this.state={
        userInfo:{
          name : "fdn",
          location:"jhvbx",
        }
    }
  }

  async componentDidMount()
  {
    // console.log(this.props.name , "child component did mount")
    const data=await fetch("https://api.github.com/users/Nitesh-Singh1010")
    const jsonData=await data.json()
    console.log(jsonData)
    this.setState={
       userInfo:jsonData
    }
    
  }
  render() {
    // console.log(this.props.name,"child component render")
    // const { name, location, emailid } = this.props; 
    const { name } = this.state.userInfo; 
    // const { count1 } = this.state;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        {/* <h3>Location : {location}</h3> */}
        {/* <h4>Contact : {emailid}</h4> */}
        {/* <h4>Count1={count1}</h4>
        <button
          onClick={() => {
            //method to update state variables, updating the state object
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increase State Variable
        </button> */}
      </div>
    );
  }
}

export default UserClass;
