import React from 'react';
import { Link } from 'react-router-dom';

export default function Assignment2() {
  
  return (<div>
      <h2>Assignment 2</h2>
      <h3>Click button to show table&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/posts'><button type='button'>click me!</button></Link> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/'><button type='button' style={{background:"gray",color:"white"}}>home</button></Link></h3>
        
  </div>)
}
