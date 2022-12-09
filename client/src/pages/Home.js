import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNavbar from "../components/NavbarComponents/CustomNavbar";
import HeroSection from "../components/HomeComponents/HeroCmp/HeroSection";
import AboutUs from "../components/HomeComponents/AboutUsCmp/AboutUs";
import BlogSection from "../components/HomeComponents/BlogCmp/BlogSection";
import Testinomial from "../components/HomeComponents/TestinomialCmp/Testinomial";
export default function Home() {
  return (
    <>
      {/* <Router> */}

      {/* <CustomNavbar /> */}
      {/* </Router> */}
      <HeroSection />
      <AboutUs />
      <BlogSection />
      <Testinomial />
    </>
  );
}
