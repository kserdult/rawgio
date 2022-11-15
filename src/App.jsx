import React, { useEffect } from 'react';
//Components and pages
import Home from './pages/Home';
import Nav from './components/Nav';

import GlobalStyles from './components/GlobalStyles';

import {Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/rawgio" element={<Home />}></Route>
        <Route path="/rawgio/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App;
