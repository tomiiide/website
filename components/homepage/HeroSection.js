import React from 'react'
import Logo from "./../icons/Logo";

export default function HeroSection() {
  return (
    <section className="hero">
    <Logo />
    <div className="hero-text">
      <h2>Hi, I'm Tomide Oladipo</h2>
      <p>  A digital architect.</p>
    </div>
    <style>
      {`
      @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

        body,html{
          margin: 0;
          padding: 0;
          font-family: "Lato";
        }

        body {
          overflow-x: hidden;
          display:relative;
        }

        
        `}
    </style>

    <style jsx>
      {`
        .hero {
          background-color: black;
          padding: 20px;
        }

        .hero-text {
          color: white;
          padding-bottom: 80px;
        }
      `}
    </style>
  </section>

  )
}
