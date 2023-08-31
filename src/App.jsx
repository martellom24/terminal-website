import React from 'react';
import Intro from './components/Intro';
import Header from './components/Header';
import Terminal from './components/Terminal';
import Resume from './components/Resume'

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <div className="md:container md:mx-3">
        <Header />
        <Intro />
        {/* <Resume /> */}
        <Terminal />
      </div>
    </div>
  )
}

export default App;
