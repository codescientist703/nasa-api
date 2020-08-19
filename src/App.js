import './App.css';
import { Switch, Route} from 'react-router-dom'
import React from 'react'; 
import NavBar from './components/navbar'
import Picofday from './components/picofday'
import { BrowserRouter as Router} from "react-router-dom";
import Mars from './components/mars'
import Gallery from './components/carousel'

function App() {

  return(
    <React.Fragment>
    <Router>
    <NavBar />
      <Switch>
        <Route exact path="/" component={Picofday} />
        <Route exact path="/mars" component={Mars} />
        <Route exact path="/mars/gallery" component={Gallery} />
      </Switch>
    </Router>
    </React.Fragment>
    
  )
}

export default App;
