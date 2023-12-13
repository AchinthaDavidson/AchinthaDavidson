import React from 'react';

const Achievement = () => {

 return (
        <div id='achievement' class="container" style={{ paddingTop: 50 }}>
            <p class="text-start fs-2  ms-5" >Licenses & Achievement</p>
            <div class="row">
                <div class="col-sm">
                    <p class="text-center fs-3 pt-3 ms-5" >Licenses </p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-bg-dark" >Python and Django Full Stack Web Developer Bootcamp in Udemy </li>
                        <li class="list-group-item text-bg-dark" >Network Essentials in CISCO Network Academy</li>
                        <li class="list-group-item text-bg-dark" >Python Essentials 2 in CISCO Network Academy</li>
                        <li class="list-group-item text-bg-dark" >he Fundamentals of Digital Marketing in Google Digital Garage</li>
                        <li class="list-group-item text-bg-dark" >Inroduction to Python in Sololearn</li>
                    </ul>
                </div>
                <div class="col-sm">
                    <p class="text-center fs-3 pt-3 ms-5" >Achievement </p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-bg-dark" >Finalists in hackX 8.0 2023 organized by University of Kelaniya.</li>
                        <li class="list-group-item text-bg-dark" >Finalists in SLIIT MINI-HACKATHON 2022 organized by SLIIT.</li>
                        <li class="list-group-item text-bg-dark" >2nd Runners–up in XbotiX – 2019 organized by University of Ruhuna.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Achievement;
