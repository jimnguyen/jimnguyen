import React from "react"
import Layout from "../components/layout"

import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

import image1 from "../assets/pic1.jpg"
import image2 from "../assets/pic2.jpg"
import image3 from "../assets/pic3.jpg"
import image4 from "../assets/pic4.jpg"
import image5 from "../assets/pic5.jpg"

import "./about.css"

export default function About() {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>Software Developer from Bellevue, WA</p>

      <AliceCarousel>
        <img src={image1} className="sliderimg" alt="image1" />
        <img src={image2} className="sliderimg" alt="image2" />
        <img src={image3} className="sliderimg" alt="image3" />
        <img src={image4} className="sliderimg" alt="image4" />
        <img src={image5} className="sliderimg" alt="image5" />
      </AliceCarousel>
    </Layout>
  )
}
