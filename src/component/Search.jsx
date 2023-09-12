import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Animelist from "./AnimeList";


const Search = () => {
    let {ti}=useParams();
   let [value,setValue]= useState(null)
   let[pending,setPending]=useState(true);
    useEffect(()=>{
        let data=fetch("https://api.jikan.moe/v4/anime");
         data.then((Response)=>{return Response.json()}).then((datas)=>{setValue(datas.data);setPending(false)})
       },[])
    return ( <>
    <div className="movie">

    {pending && <div className="loder"></div>}
      {value!=null && <Animelist anime={value.filter((v)=>{return v.title.toUpperCase().includes(ti.toUpperCase())})}/>}
      
    </div>
    </> );
}
 
export default Search;