import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <>
    <Navbar/>
    <div className="Header--first">
    <h1 className="Header__Big"> Your product playbook right at your fingertips. </h1>
    <h2 className="Header__Small"> Let us help you cater to your consumer's demands by using our advanced recommendation system based on over <strong>50 million</strong> products.</h2>
    <Button variant="contained" color="secondary" className="Header__Button">DEMO</Button>
    </div>
    <div className="Center_Image">
    <img className="Image--first" src="https://searchengineland.com/figz/wp-content/seloads/2015/10/graph-line-trend-analytics-magnifying-glass-ss-1920.jpg"></img>
    </div>
    </>
  );
}

export default App;
