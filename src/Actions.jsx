import axios from 'axios'
// export const increment=()=>{
//     return(
//         {
//             type:"INCREMENT"
//         }
//     )
// }

// export const decrement=()=>{
//     return({
//         type:"DECREMENT"
//     })
// }

export const fetchposts= ()=>
    (dispatch,getState)=>{
        const response= axios.get("https://fakestoreapi.com/products")
         console.log(response.data)
         dispatch({
            type:"FETCH_POSTS",
            payload:response.data
         })
    }
    
