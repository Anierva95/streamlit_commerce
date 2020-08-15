import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import LiveChat from 'react-livechat'


function App() {
  return (
    <>
      <Navbar />
      <div class="wrapper">
        <div className="Header--first">
          <h1 className="Header__Big"> Your product playbook right at your fingertips. </h1>
          <h2 className="Header__Small"> Let us help you cater to your consumer's demands by using our advanced recommendation system based on over <strong>50 million</strong> products.</h2>
          <Button variant="contained" color="secondary" className="Header__Button">DEMO</Button>
        </div>
        <div className="Center_Image">
          <img className="Image--first" src="https://searchengineland.com/figz/wp-content/seloads/2015/10/graph-line-trend-analytics-magnifying-glass-ss-1920.jpg"></img>
        </div>
      </div>
      <section className="section__how">
        <div className="wrapper">
          <div className="Header--first">
            <h1 className="Header__Big--2">How does StreamLit work?</h1>
          <Grid container>
          <Grid item xs={4}>
          <h1>1.</h1>
          <h3>Upload your csv.</h3>
          </Grid>
          <Grid item xs={4}>
          <h1>2.</h1>
          <h3>Our model will make predictions based on your data.</h3>
          </Grid>
          <Grid item xs={4}>
          <h1>3.</h1>
          <h3>You gain access to your products trends.</h3>
          </Grid>
          </Grid>
            <h2></h2>
          </div>
        </div>
      </section>
      <CallToAction/>
      <section className="section__features"></section>
      <LiveChat license={11844840}/>
      <Footer/>
    </>
  );
}

export default App;
