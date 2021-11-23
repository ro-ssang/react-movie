import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/GlobalStyle';
import { defaultTheme } from './assets/styles/theme';
import Home from './components/templates/Home';
import MovieDetail from './components/templates/MovieDetail';
import Tv from './components/templates/Tv';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:movieId" exact component={MovieDetail} />
        <Route path="/tv" component={Tv} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
