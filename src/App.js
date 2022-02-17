
import './App.css';
import MainPage from './Pages/MainPage';
import ReactGA from 'react-ga';
import { useEffect, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import CompanyPage from './Pages/CompanyPage';
import ServicePage from './Pages/ServicePage';

function App() {
  ReactGA.initialize("G-ZY72RQV5P4");
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
}, []);
const useGAEventsTracker = (category = 'Event Category') => {
  
  const trackEvent = (action = 'action', label = 'label') => {
      ReactGA.event(category, action, label);
      return trackEvent;
  };
};
  return (
    <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/company" element = {<CompanyPage/>}/>
    <Route path="/service" element = {<ServicePage/>}/>
    </Routes>
  );
}
export default App;
