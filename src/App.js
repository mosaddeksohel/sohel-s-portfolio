import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import AboutMe from "./Components/Aboutme/AboutMe";
import Blog from "./Components/Blog/Blog";
import Home from './Components/Home/Home';
import MountainBike from "./Components/MountainBike/MountainBike";
import Navigation from "./Components/Navigation/Navigation";
import Projects from "./Components/Projects/Projects";
import Travelers from "./Components/Travelers/Travelers";
import Health from "./Health/Health";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/mountainbike" >
            <MountainBike />
          </Route>
          <Route path="/travelers" >
            <Travelers />
          </Route>
          <Route path="/healthcare" >
            <Health />
          </Route>
          <Route path="/blog" >
            <Blog />
          </Route>
          <Route path="/aboutme" >
            <AboutMe />
          </Route>
          <Route path="/projects" >
            <Projects />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
