import React from "react";


class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child - constructor" );
  }
  componentDidMount() {
    console.log("child - componentDidMount" );
    //  this.timer =setInterval(() => {
    //     console.log(" React OP ----- omini potentiol");
    // }, 1000)
  }
  componentWillUnmount(){
    // clearInterval(this.timer)
  }

  render() {
    const {name, bio, location, avatar_url} = this.props.userInfo;
    const {count} = this.state;
    console.log("child - render");
    return (
      <div>
        <h2>This is profileClass component and a class component</h2>
        <h2>Name : {name}</h2>
        <img src={avatar_url} alt="" />
        <h2>Bio : {bio}</h2>
        <h2>Location : {location}</h2>
        <h1>Counter in Class Component</h1>
        {/* Never up date state varibles directly */}
        <button onClick={() => this.setState({count: count + 1})}>ADD</button>
        <h1>{count}</h1>
        <button onClick={() => this.setState({count: count - 1})}>LESS</button>
      </div>
    );
  }
}
export default ProfileClass;
