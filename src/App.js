import React from 'react'
import { ThemeProvider } from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import GlobalStyle from './globalStyles'
import { lightTheme, darkTheme } from './utilities/Themes';
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import MySkillsPage from './pages/MySkillsPage'
import Layout from './components/Layout/Layout';
import ScrollOnTop from './components/ScrollOnTop';

function App() {
  const location = useLocation()
  const theme = ['/work', '/skills'].includes(location.pathname) ? darkTheme : lightTheme;
  console.log(location.pathname)

  return (
    <React.Fragment>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Layout>
          <ScrollOnTop>
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.key}>
                <Route path='/' element={<MainPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='work' element={<WorkPage />} />
                <Route path='skills' element={<MySkillsPage />} />
              </Routes>
            </AnimatePresence>
          </ScrollOnTop>
        </Layout>
      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
