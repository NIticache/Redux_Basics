import React from 'react'
import axios from 'axios'
const initstate=[]
const reducer = (state=0,action) => {
    console.log("We are in Reducer",action.type)
switch(action.type){
    case "INCREMENT":
     return state+1
     case "DECREMENT":
        return state-1
     
     default :
     return state   
}
}

export const fetchreducer=(state=initstate,action)=>{
    console.log("WE ARE IN FETCHREDUCER",action.type)
    switch (action.type){
        case "FETCH_POSTS"   :
                return state
        default:
            return state

    }
}

export default reducer;