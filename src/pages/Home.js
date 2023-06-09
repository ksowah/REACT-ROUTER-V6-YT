import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';

const Home = () => {
    
  return (
    <div className='main'>
        <h1>Home</h1>
        <Link to={"/contacts"} >
        <p >contacts page</p>
        </Link>
    </div>
  )
}

export default Home