import React from 'react';
import myImage1 from "../Assets/me1.jpg"
import AboutData from './AboutData';
const About = () => {
 return (
        <div  id='about' class="container" style={{ paddingTop: 50 }}>
            <div class="row">
                <div class="col-sm">
                    <img src={myImage1} class="rounded  mx-auto d-block img-fluid" width={400} alt="..." />
                    
                </div>
               <AboutData/>

            </div>
        </div>
    );
};

export default About;
