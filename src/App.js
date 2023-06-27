import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { HashRouter, Routes, Route, Outlet} from 'react-router-dom';

const background = {
  backgroundColor: '#EEA47F',
  width: '100%',
  maxWidth: 'inherit',
  minHeight: '100vh',
  backgroundPosition: 'absolute'
};

function App() {

  const Layout = () => {
    return(
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }
  return (
    <div style={background}>
        <HashRouter>
          <Routes>
            <Route path="https://hro0806.github.io/new-portfolio/" element={<Layout />}>
              <Route path="https://hro0806.github.io/new-portfolio/" element={<About />}/>
              <Route path="https://hro0806.github.io/new-portfolio/skills" element={<Skills />}/>
              <Route path="https://hro0806.github.io/new-portfolio/portfolio" element={<Portfolio />}/>
              <Route path="https://hro0806.github.io/new-portfolio/contact" element={<Contact />}/>
              <Route path="https://hro0806.github.io/new-portfolio/resume" element={<Resume />}/>
            </Route>  
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
