import React, { useState } from 'react';
import './AboutUs.css';

export default function AboutUs() {



    return (
        <>
            <div className="about_section">

                <div class="left_part">
                    <img src='../../../../Image/whoweare.jpg'></img>
                </div>
                <div class="right_part">
                    <h2 className='heading'>Who We Are</h2>
                    <br></br>
                    <p className='para' style={{ "fontFamily": 'Roboto', "letterSpacing": "1px", "lineHeight": "20px" }}>    The information and services may contain bugs, errors, problems or
                        other limitations. We have no liability whatsoever for your use of
                        any information or service. Use any service or information given
                        here at your own risk.Read our full Terms of Service.    The information and services may contain bugs, errors, problems or
                        other limitations. We have no liability whatsoever for your use of
                        any information or service. Use any service or information given
                        here at your own risk. Read our full Terms of Service.    The information and services may contain bugs, errors, problems or
                        other limitations. We have no liability whatsoever for your use of
                        any information or service. Use any service or information given
                        here at your own risk. Read our full Terms of Service. </p>
                </div>


            </div>

        </>
    )
}