import {useEffect, useState} from 'react'

const ProfileFn = (props) => {
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //  const timmer = setInterval(() => {
  //     console.log("namaste React JS -OP-");
  //   }, 1000);
  //   console.log("useEffect");
  //   return() => {
  //     clearInterval(timmer)
  //     console.log("useEffect-Return");
      
  //   }
  // },[])
  console.log("render");
  return (
    
    <div>
        <h2>Profile Component</h2>
        <h3>Name : {props.name}</h3>
        <h1>counter in Functional component using Hooks</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count -1)}>decrement</button>
    </div>
  )
}

export default ProfileFn


