import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/GlobalStyle';
import { defaultTheme } from './assets/styles/theme';
import Home from './pages/Home';
import Tv from './pages/Tv';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={Tv} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
