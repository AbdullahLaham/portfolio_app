import logo from './logo.svg';
import React from 'react'
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio';
import Testimorial from './components/testimorials/testimorial';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimorial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
