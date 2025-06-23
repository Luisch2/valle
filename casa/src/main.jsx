import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Header from './Header'
import App from './App'
import Footer from './Footer'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <App />
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
