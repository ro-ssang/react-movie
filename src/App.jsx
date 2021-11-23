import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tv from './pages/Tv';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={Tv} />
    </Router>
  );
}

export default App;
