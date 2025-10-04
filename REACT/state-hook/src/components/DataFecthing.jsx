import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFecthing() {

   const [post,setPost]=useState({})
   const[ id,setId]=useState(1)
   const[idFromButtonclick, setIdFromButtonClick]=useState(1)
const HandleClick =()=>{
    setIdFromButtonClick(id)
}


   useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonclick}`)
    .then(res => {
      console.log(res)
      setPost(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}, [idFromButtonclick]) 
  return (
    <div>
        <input type="text" value={id} onChange={e=> setId(e.target.value)} />
      <button onClick={HandleClick}>Fetch Post</button>
      {/* <ul>
        {
            posts.map(post=> <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
      <div>{post.title}</div>
    </div>
  )
}

export default DataFecthing











