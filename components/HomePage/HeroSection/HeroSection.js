import React from "react"
import Logo from "../../icons/Logo"
import "./HeroSection.css"

const HeroSection = ({ clicked }) => (
  <section className="hero">
    <div className="logo" onClick={() => clicked}>
      <Logo />
    </div>
    <div className="hero-text">
      <h2>Hiii,</h2>
      <h2> my name is,</h2>
      <h2>tomide oladapo.</h2>
    </div>
    <div style={{ color: "white" }}>
      <p>
        I care about building amazing products that works. <br />
        I’m fascinated by how design and code interact to create products that
        deliver memorable experiences while solving problems in a simple way.
      </p>
    </div>
  </section>
)

export default HeroSection
