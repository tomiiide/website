import Logo from "./../components/icons/Logo"
import React from "react"

function Home() {
  return (
    <section className="body">
      <Logo />
      <div className="hero">
        <h2>Hi, I'm Tomide Oladipo</h2>
        <p>A UI / UX Designer & Frontend Dev</p>
      </div>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

          body,html{
            margin: 0;
            padding: 0;
            font-family: "Lato";
          }

          
          `}
      </style>

      <style jsx>
        {`
          .body {
            background-color: black;
            padding: 20px;
          }

          .hero {
            color: white;
            padding-bottom: 80px;
          }
        `}
      </style>
    </section>
  )
}

export default Home
