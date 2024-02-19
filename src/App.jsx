import React from 'react';
import { Router, Route } from 'wouter';
import { useSelector } from "react-redux";

import './App.css';

import Navbar from "./components/Navbar";
import JumpToTopButton from './components/JumpToTopButton';
import SettingsPanel from './components/settings-main-assets/SettingsPanel';

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import SettingsButton from './components/settings-main-assets/SettingsButton';

function App() {

  const { blobAppearance } = useSelector(state => state.displayValue);

  return (
    <>
      <div className={`w-screen min-h-screen overflow-x-hidden overflow-y-auto bg-black ${blobAppearance ? 'bg-blob-background' : null} bg-no-repeat bg-center bg-cover`}>
        <div className="!max-w-full min-h-screen  bg-translucent-black">
          <Router>
            <Navbar />
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Router>
          <JumpToTopButton />
          <SettingsButton />
          <SettingsPanel />
        </div>
      </div>
    </>
  );
}

export default App;
