import React from 'react';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import ContentUX from './Components/ContentUX';
import ContextCopyWrite from './Components/ContextCopyWrite';
import ContentWriting from './Components/ContentWriting';
import About from './Components/About';


function App() {
  return (
    <>
      <NavBar />
      <Header />
      <ContentUX />
      <ContextCopyWrite />
      <ContentWriting />
      <About />
    </>
  );
}

export default App;