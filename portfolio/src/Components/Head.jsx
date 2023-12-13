import React from 'react';
import Navbar from './Navbar';
import Background from "../Assets/background.jpg"
import myImage from "../Assets/me.jpg"
const Head = () => {




    return (
        <div class="card text-bg-dark p-0">
            <img src={Background} class="card-img" alt="..." />
            <div class="card-img-overlay">
                <Navbar />
                <img src={myImage} class=" mx-auto d-block img-fluid" width="15%" style={{ borderRadius: 150 }} alt="..."></img>
                <p class="text-center fs-2" style={{ color: "orange" }}>ISURU ACHINTHA</p>
                <p className="text-center fs-6" style={{ color: "white" }}>A Full Stack Devoloper</p>
            </div>
        </div>
    );
};

export default Head;
