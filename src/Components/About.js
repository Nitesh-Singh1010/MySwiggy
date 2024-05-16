// import React from 'react'
// import UserClass from './User'
// const About = () => {
//   return (
// <div>
//   <h1>About Page</h1>
//   <UserClass name={"nitesh"} location={"jaipur"} emailid={"iamnitesh22@gmail.com"}/>
// </div>
//   )
// }

// export default About

import React from "react";
import UserClass from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor")
  }
  componentDidMount(){
    // console.log("parent component did mount")
  }
  render() {
    console.log("parent render")
    return (
      <div>
        <h1>About Page</h1>
        <UserClass
          name={"nitesh1"}
          location={"jaipur"}
          emailid={"iamnitesh22@gmail.com"}
        />
        {/* this is for checking and learning react compnent life cycle */}
        {/* <UserClass
          name={"nitesh2"}
          location={"jaipur"}
          emailid={"iamnitesh22@gmail.com"}
        /> */}
      </div>
    );
  }
}
export default About