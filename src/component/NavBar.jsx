import { useState } from 'react';
import photo from './painted-camera.png';
function Navbar(){
  let[v,setv]  =useState("")
 
    return(
    <>
      <nav>
          <div className='logo'>
            <a href="/" ><img src={photo} alt="logo" /> </a>
          </div>
          <div className='anime'><h1>Anime..</h1></div>
          <div className='search'>
            <input type="search" value={v} onChange={(e)=>setv(e.target.value)}/>
            {/* target is method in value and this method will return input tag */}
            <a href={`/Search${v}`}> <button >click</button></a>
          </div>
      </nav>
 </>
    )
}
export default Navbar;