import React, { useEffect, useState } from 'react';
import ChildForAss3 from './ChildForAss3';
export default function Assignment3() {

    const [employees, setEmployees] = useState([])
    const handleChange = (value) => {
       if(value ==1){
            let tmp = [...employees];
            setEmployees(tmp.sort((a, b)=>(a.name>b.name) ? 1:-1));
        
       }
       if(value==2){
            let tmp=[...employees]        
            setEmployees(tmp.sort((a,b)=>(new Date(a.birthDate).valueOf()-new Date(b.birthDate).valueOf())));
       }
    }
    useEffect(() => {
       
        fetch('./data.json')
        .then(res => {
            return res.json();
        })
        .then(data => {
           setEmployees(data);
        })
        .catch(err => {
            console.log('Error ---- ', err)
        })
         }, [])

  return (<div>
      <h2>Asssignment 3</h2>
      <ChildForAss3  handleChange={handleChange}/>
      <table border="1px" width="75%">
	<thead>
	<tr>
		<th scope="col">Id</th>
		<th scope="col">Name</th>
		<th scope="col">Birth-Date</th>
	</tr>
	</thead>
    <tbody>
	
      {employees.map(emp => (
          <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.birthDate}</td>
          </tr>
        ))
        }
    </tbody>
    </table>
  </div>);
}
