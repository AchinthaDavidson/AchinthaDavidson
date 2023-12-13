import React from 'react';
import myImage1 from "../Assets/me1.jpg"

const AboutData = () => {


    const handleDownload = () => {
        // Example PDF file URL
        const pdfUrl = 'https://drive.google.com/file/d/1XVyLBW95FaVLX0YD86kdC7O5Refq_ZLj/view?usp=sharing';

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'document.pdf'; // Set the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    }

    return (
        <div class="col-sm">
        <p class="text-start fs-2 " >About Me</p>
        <p class="lh-base">I am Isuru Achintha Wijethunga 22 years old and I am currently a third-year software engineering undergraduate at SLIIT Im originally from kandy but have relocated to Malabe. And about my schooling career, I am a product of Sri Chandananda Buddhist College Kandy.</p>

        <div class="card text-light p-3" style={{ backgroundColor: "#2B3035" }}>
            <div class="card-body" >
                <table class="table table-borderless ">
                    <tr > 
                        <td class="p-2">Name : Isuru Achintha</td>
                        <td class="p-2">Age :  22</td>
                    </tr>
                    <tr >
                        <td class="p-2">Name : +94 718922774</td>
                        <td class="p-2">Address :katugastota,Kandy </td>
                    </tr> <tr>
                        <td class="p-2">Experience : freash </td>

                    </tr>

                </table>

               
            </div>
            
        </div>
        <div class="pt-5 fs-6">
        <button type="button" onClick={handleDownload} class=" btn btn-warning p-2 fw-semibold">DONLOAD CV</button>
        </div>
       
    </div>
    );
};

export default AboutData;
