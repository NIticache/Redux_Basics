import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import {increment,decrement} from './Actions'
import { useEffect } from 'react';
import axios from 'axios'

function App() {
  

  
  const count=useSelector(state=>state)
  const dispatch=useDispatch();
  // useEffect(()=>{
  //   dispatch(fetchposts())
  // },[])
 
  return (
    <div className="App">
    <h1>{count}</h1>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
<div>
{/* {response.data.map((item)=>{
  return<h1>item</h1>
})} */}
</div>
    </div>
  );
}

export default App;
