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
    <h1 className="Header__Big"> Your product predictions right at your fingertips. </h1>
    <h2 className="Header__Small"> Let us help you cater to your consumers demands by using our advanced recommendation system based on over <strong>50 million</strong> products.</h2>
    <Button variant="contained" color="secondary" className="Header__Button">DEMO</Button>
    </div>
    </>
  );
}

export default App;
