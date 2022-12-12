import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import {fetchposts} from './Actions'
import { useEffect } from 'react';
import axios from 'axios'

function App() {
  

  
  // const count=useSelector(state=>state)
  const posts=useSelector(state=>state)
  
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchposts())
    
  },[])
 
  return (
    <div className="App">
      {console.log(posts)}
      { posts.length>0 && posts.map((item)=>{
        return(
        <h5>{item.title}</h5>
        )
      })}
    {/* <h1>{count}</h1>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button> */}
<div>
{/* {response.data.map((item)=>{
  return<h1>item</h1>
})} */}
</div>
HI
    </div>
  );
}

export default App;
