import axios from 'axios'
export const increment=()=>{
    return(
        {
            type:"INCREMENT"
        }
    )
}

export const decrement=()=>{
    return({
        type:"DECREMENT"
    })
}

// export const fetchposts=()=>{
//      const response=axios.get("https://fakestoreapi.com/products")
//      console.log(response)
//      return{
//         type:"FETCH_POSTS",
//         payload:response.data
//      }
// }