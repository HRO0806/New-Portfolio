import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<About />}/>
              <Route path="/skills" element={<Skills />}/>
              <Route path="/portfolio" element={<Portfolio />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/resume" element={<Resume />}/>
            </Route>  
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
