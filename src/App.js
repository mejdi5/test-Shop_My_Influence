import React from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import OverallPerformance from './components/overallPerformance/OverallPerformance'
import MainInsights from './components/mainInsights/MainInsights'
import InDepthAnalysts from './components/inDepthAnalysts/InDepthAnalysts'
import Sales from './components/sales/Sales'
import Header from './components/header/Header';

function App() {
return (
  <div className="App">
    <Sidebar/>
    <div className="container">
      <Navbar/>
      <Header/>
      <OverallPerformance/>
      <MainInsights/>
      <InDepthAnalysts/>
      <Sales/>
    </div>
  </div>
  );
}

export default App;
