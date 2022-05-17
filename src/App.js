import React from 'react'
import { ThemeProvider } from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import GlobalStyle from './globalStyles'
import { lightTheme } from './utilities/Themes';
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'
import MySkillsPage from './pages/MySkillsPage'
import Layout from './components/Layout/Layout';

function App() {
  const location = useLocation()
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
              <Route path='/' element={<MainPage />} />
              <Route path='about' element={<AboutPage />} />
              <Route path='work' element={<WorkPage />} />
              <Route path='skills' element={<MySkillsPage />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
