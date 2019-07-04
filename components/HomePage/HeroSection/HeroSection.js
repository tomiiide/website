import React from "react"


const HeroSection = ({ clicked }) => (
  <section className="hero">
    <div className="hero-text">
      <h2>
        Hiii, <br />
        my name is, <br />
        tomide oladipo.
      </h2>
    </div>
    <div style={{ color: "white" }}>
      <p>
        I build products that deliver excellent user experience. <br /> <br />
        I’m fascinated by how design and code interact to create products that
        deliver memorable experiences while solving problems in a simple way.
      </p>
    </div>

    <style jsx>
      {`
      .hero {
        padding: 40px 10px 60px;
        font-size: 36px;
        margin-bottom: 40px;
    }
    
    .hero-text {
        padding-bottom: 10px;
        margin-top: 80px;
        
    }
    
    .hero p{
        font-size: 14px;
    }
    
    /* Desktops and laptops ----------- */
    @media only screen and (min-width : 1024px) {
        /* Styles */
     .hero-text{
         margin-top: 120px;
     }   
    
     .hero {
         font-size: 42px;
     }
    
     .hero  p {
        font-size: 20px;
        max-width: 80%;
     }
    }
      `}
    </style>
  </section>
)

export default HeroSection
