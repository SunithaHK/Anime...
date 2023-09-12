import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Animelist from "./AnimeList";
const AnimeDetails = () => {
      let[values,setValue]=useState(null);
      let history=useHistory();
     let{id} =useParams()
    useEffect(()=>{
     let data=fetch("https://api.jikan.moe/v4/anime/"+id );
      data.then((Response)=>{return Response.json()}).then((datas)=>{setValue(datas.data)})
      //code to  delete object
     
    },[])
    let handleDeleteFood=()=>{
      fetch("https://api.jikan.moe/v4/anime/"+id ,{method:"DELETE"}).then(()=>{alert("food hasbeen removed");
      history.push("/");
    })
    }
   
    
    return (<>
    
    {
        values && <div className="details">
        <h1>Title:{values.title}</h1><h1>year:{values.year}</h1>
        
     <img src={values.images.jpg.image_url} alt="image" /><br></br>
     
     <h1>Episodes:{values.synopsis}</h1>
     <button onClick={handleDeleteFood}>remove food</button>
       </div>}
    
    </>
    );
}
 
export default AnimeDetails;