import React, { FC } from 'react';
import arola from './arola-logo.png';
import './home.css'
const Home: FC = () => {
    return <>
        <div><h3 className="App-link">Hello, Uganda! Welcome To Arola, Inc.</h3>
        </div>
        <br />
        <img src={arola} className="App-logo" alt="logo" />
        <br />
          <a
          className="App-link"
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
         Talk to us. We Listen.
        </a>
    </>
}
export default Home;