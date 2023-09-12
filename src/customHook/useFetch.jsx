//this is custom hook concept and it is used for code reusability and here we have same code of line in moovie details and home components
import { useEffect,useState } from "react";

function useFetch(req){
    let[value,setValue]=useState(null);
    let[pending,setPending]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
         let data=fetch(req)
         data.then((Response)=>{ return Response.json()}).then(({data})=>{setValue(data);setPending(false)})
        },2000)
       },[])
     
    return {value,pending}
}
export default useFetch