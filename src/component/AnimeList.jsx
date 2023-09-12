import { Link } from "react-router-dom";

function Animelist({anime}){
  console.log(anime)
return(<>
{
anime.map((animedata)=>{
return(<>
    <div className="template">
    
      <Link to={`/deatils${animedata.mal_id}`}>
  <h1>Title:{animedata.title}</h1><h1>year:{animedata.year}</h1>
  <img src={animedata.images.jpg.image_url} alt="image" />
  <h1>Episodes:{animedata.episodes}</h1></Link></div>
  </>
)


})}

</>

)
}
export default Animelist;