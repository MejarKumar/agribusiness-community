import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testinomial.css';

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z" /></svg>
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg>
        </div>
    );
};



const Testimonial = () => {
    return (

        <div className='testimonial_section'>
            <div
                className="testimonial"
                style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
            >
                <div style={{ width: "50%", textAlign: "center" }}>
                    <h1 className='testinomial_heading' >Testimonials</h1>
                    {/* <div className='testinomial_main'>
                        <div className='quotes'>
                            
                        </div>
                        <div>
                           
                        </div>
                        <div className='quotes'>
                          
                        </div> 
                    </div>*/}

                    <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                        <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
                        <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
                        <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
                    </Slider>

                </div>
            </div>
        </div>
    );
};

const Card = ({ img }) => {
    return (

        <>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div >


                    <svg style={{ height: "4rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z" /></svg>

                </div>
                <div>

                    <svg style={{ height: "4rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z" /></svg>
                </div>
            </div>


            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    color: "gray",
                }}
            >
                {/* <Avatar
                imgProps={{ style: { borderRadius: "50%" } }}
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid lightgray",
                    padding: 7,
                    marginBottom: 20,
                }}
            /> */}

                <img src={img} className="testinomial_image"></img>
                <p className='para' style={{ fontWeight: "600" }}>
                    Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
                    Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
                    tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
                    fringilla massa. Etiam hendrerit dolor eget rutrum
                </p>
                <p style={{ fontStyle: "italic", marginTop: 25 }}>
                    <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
                    Media Analyst
                </p>
            </div>
        </>
    );
};

export default Testimonial;