import React from 'react';
export default function ChildForAss3(props) {
  return (<div>
      <input type="radio" value="1" name="group" onChange={(e)=>props.handleChange(e.target.value)} /> Sort By Name
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" value="2" name="group" onChange={(e)=>props.handleChange(e.target.value)} /> Sort By Age
  </div>);
}
