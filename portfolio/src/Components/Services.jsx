import React from 'react';
import ServicesList from './ServicesList';

const Services = () => {
    return (
        <div id='services' class="container" style={{ paddingTop: 50 }}>
        <div class="">
            <div class="col-sm">
                <p class="text-start fs-1  ms-5" >Services</p>
<p class="text-start  ms-5">Here it's my servises that can I do,my skills and my experince.</p> 
            </div>
      <ServicesList/>

        </div>
    </div>
    );
};

export default Services;
