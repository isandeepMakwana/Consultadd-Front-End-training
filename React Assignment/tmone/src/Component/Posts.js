import React, { useEffect, useState } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            return res.json()
        })
        .then(data => {
                setPosts(data.slice(0,30));
        })
        .catch(err => {
            console.log('Error ---- ', err)
        })
         }, [])

  return (<div>
<table>
	<thead>
	<tr>
		<th scope="col">Id</th>
		<th scope="col">Title</th>
		<th scope="col">Body</th>
	</tr>
	</thead>
    <tbody>
	
      {posts.map(post => (
          <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
          </tr>
        ))
        }
    </tbody>
    </table>		
  </div>);
}
