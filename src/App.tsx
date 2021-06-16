import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import About from './routes/About'
import Main from './routes/Main';


const App: React.FC = () => {


  return <BrowserRouter>
    <NavBar />
    <Switch>
    <Route path="/about" >
        <About />
      </Route>
      <Route path="/" >
        <Main />
      </Route>
    </Switch>
  </BrowserRouter>;
}

export default App;
