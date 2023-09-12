import { useState } from "react";
import { useEffect } from "react";
import useFetch from "../customHook/useFetch";
import Animelist from "./AnimeList";

function Home(){
   let {value ,pending}=useFetch("https://api.jikan.moe/v4/anime")
  
  const conditionalClssname= pending?"blank":"movie";
  const backgrndColor= pending ? {backgrndColor:"white"} :{}
 return (
    <div className={conditionalClssname} style={backgrndColor}>
    {pending && <div className="loder"></div> }
      {value!=null && <Animelist anime={value}/>}
    </div>
 );
 }
export default Home;