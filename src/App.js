import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>

        </Switch>




      </BrowserRouter>


    </div>
  );
}

export default App;
