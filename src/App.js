import React from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import GlobalStyle from './globalStyles'
import { Switch, Route } from 'react-router-dom'

import Main from './components/Main'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import WorkPage from './components/WorkPage'
import MySkillsPage from './components/MySkillsPage'

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/about' component={AboutPage} />
          <Route path='/blog' component={BlogPage} />
          <Route path='/work' component={WorkPage} />
          <Route path='/skills' component={MySkillsPage} />
        </Switch>
      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
