import React from "react"
import Logo from "../../icons/Logo"
import "./HeroSection.css"

const HeroSection = ({ clicked }) => (
  <section className="hero">
    <div className="logo" onClick={clicked}>
      <Logo />
    </div>
    <div className="hero-text">
      <h2>Hiii, <br/>
      my name is, <br/>
      tomide oladipo.</h2>
    </div>
    <div style={{ color: "white" }}>
      <p>
        I build amazing products that deliver the best experience. <br /> <br/>
        I’m fascinated by how design and code interact to create products that
        deliver memorable experiences while solving problems in a simple way.
      </p>
    </div>
  </section>
)

export default HeroSection
