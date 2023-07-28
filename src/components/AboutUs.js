
import { Outlet, json } from 'react-router-dom'
import ProfileFn from './ProfileFn'
import { Component } from 'react'
import ProfileClass from './ProfileClass'
import userContext from '../utils/userContext'
import { h1 } from 'fontawesome'


class AboutUs extends Component{
  constructor(props){
    super(props)
    // console.log("parent constructor");
    this.state = {
      userInfo : {
        name: "dummy",
        location : "default"
      }
    }
  }
  async componentDidMount(){
    // const data =await fetch("https://api.github.com/users/xavierdaniel1997")
    // const json =await data.json() 
    // this.setState({ userInfo: json})
    // console.log(json);
    // console.log("parent componentDidMount");
  }
  componentDidUpdate(){
    // console.log("------ parent componentDidUpdate ------");
    
  }
  componentWillUnmount(){
    // console.log("------*** parent componentWillUnmount ***------")
  }
  render() {
    // console.log("parent render");
    return (
      <div className='mx-52 my-10'>
          <h1>About-Us</h1>
          <userContext.Consumer>
            {({userName}) => <h1 className='font-extrabold text-blue-500 text-4xl'>{userName.name} - {userName.email}</h1>}
          </userContext.Consumer>
          <p>this is the about us page only for learning namaste react js</p>
          {/* <h1>{this.state.userInfo.name}</h1> */}
          <ProfileFn/>
          <hr />
          {/* <ProfileClass userInfo={this.state.userInfo}/> */}
      </div>
    )
  }
}
export default AboutUs