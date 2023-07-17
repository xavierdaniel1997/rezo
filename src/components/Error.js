import React from 'react'
import { useRouteError ,Link } from 'react-router-dom'

const Error = () => {
  const err = useRouteError()
  const {status, statusText} = err;
  // console.log(err);
  return (
    <div>
        <h1>Something went wrong</h1>
        <h2>{status + " : " + statusText}</h2>
        <Link to="/"><button>Go Back</button></Link>
    </div>
  )
}

export default Error