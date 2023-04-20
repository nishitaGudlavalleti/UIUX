import React from 'react';
import './App.css';
import { Article,Brand,Cta, Navbar } from './component';
import { Footer,Blog,Possibility,Features,What,Header } from './containers';


const app = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>

        </div>
        <Brand/>
        <What/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>

    </div>
  )
}

export default app