
import './App.css';
import Home from './component/Home';
import Navbar from './component/NavBar';
import {BrowserRoute ,Switch,Route, BrowserRouter} from 'react-router-dom';
import AnimeDetails from './component/animedetails';
import Search from './component/Search';
function App() {
  return (
    <BrowserRouter>
    <>
   <Navbar/>
   <Switch>
    <Route exact path="/">
  <Home/>
  </Route>
  <Route path="/deatils:id">
  <AnimeDetails/>
  </Route>
  <Route path="/Search:ti">
  <Search/>
  </Route>
  </Switch>
  </>
  </BrowserRouter>
  );
}

export default App;
