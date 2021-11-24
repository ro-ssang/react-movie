import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/GlobalStyle';
import { defaultTheme } from './assets/styles/theme';
import Home from './components/templates/Home';
import MovieDetail from './components/templates/MovieDetail';
import Search from './components/templates/Search';
import Tv from './components/templates/Tv';
import TvDetail from './components/templates/TvDetail';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:movieId" exact component={MovieDetail} />
        <Route path="/tv" exact component={Tv} />
        <Route path="/tv/:tvId" component={TvDetail} />
        <Route path="/search" component={Search} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
