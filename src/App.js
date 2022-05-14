import React from 'react'
import { ThemeProvider } from 'styled-components';
import { Switch, Route, useLocation } from 'react-router-dom'

import GlobalStyle from './globalStyles'
import { lightTheme } from './utilities/Themes';
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import MySkillsPage from './pages/MySkillsPage'
import Layout from './components/Layout/Layout';
import MainNavigation from './components/Layout/MainNavigation';
import AboutPage2 from './pages/AboutPage2';

function App() {

  const location = useLocation()

  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={MainPage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/about2' component={AboutPage2} />
            <Route path='/work' component={WorkPage} />
            <Route path='/skills' component={MySkillsPage} />
            <Route path='/header' component={MainNavigation} />
          </Switch>
        </Layout>
      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
