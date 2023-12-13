import React from 'react';
import Navbar from '../Components/Navbar'
import '../CSS/Home.css';
import myImage from "../Assets/me.jpg"
import About from '../Components/About';
import Skills from '../Components/Skills';
import Services from '../Components/Services';
import Achievement from '../Components/Achievement';
import Project from '../Components/Project';
import Head from '../Components/Head';
const Home = () => {



    return (
        <div className='p-3 mb-2 bg-body text-body'>
            <div className="background-container">
                <div className="dark-overlay">
                    <Navbar />
                    <img src={myImage} class=" mx-auto d-block img-fluid" width="15%" style={{borderRadius:150}} alt="..."></img>
                    <p class="text-center fs-2" style={{color:"orange"}}>ISURU ACHINTHA</p>
                        
                        <p className="text-center fs-6" style={{color:"white"}}>A Full Stack Devoloper</p>
                   
                </div>
                <div class="p-3 mb-2 bg-dark text-white">
                    
                    <About/>
                    <Skills/>
                    <Services/>
                    <Achievement/>
                    <Project/>

                </div>
               
            </div>
    
        </div>
    )

}
export default Home;