import React from "react"
import SplitText from "react-pose-text"
import posed, { PoseGroup } from "react-pose"

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 100,
  },
}

const HeroSection = ({ clicked, loaded }) => {
  console.log(loaded)

  return (
    <section className="hero">
      <div className="hero-text">
        
          <h2>
            <SplitText
              key="hiii"
              initialPose="exit"
              pose="enter"
              charPoses={charPoses}
            >
              Hiii,
            </SplitText>
            <br />
            <SplitText
              key="name"
              initialPose="exit"
              pose="enter"
              charPoses={charPoses}
            >
              my name is,
            </SplitText>
            <br />
            <SplitText
              key="tomide"
              initialPose="exit"
              pose="enter"
              charPoses={charPoses}
            >
              tomide oladipo.
            </SplitText>
          </h2>
        
      </div>
      <div style={{ color: "white" }}>
        <p>
          I build products that deliver excellent user experience. <br /> <br />
          I’m fascinated by how design and code interact to create products that
          deliver memorable experiences while solving problems in a simple way.
        </p>
      </div>

      <style jsx>{`
        * {
          animation-fill-mode: both;
        }

        .hero {
          padding: 40px 10px 60px;
          font-size: 36px;
          margin-bottom: 40px;
          visibility: ${loaded ? "visible" : "hidden"};
        }

        .hero-text {
          padding-bottom: 10px;
          margin-top: 40px;
        }

        .hero p {
          font-size: 14px;
        }

        /* Desktops and laptops ----------- */
        @media only screen and (min-width: 1024px) {
          /* Styles */
          .hero-text {
            margin-top: 120px;
          }

          .hero {
            font-size: 42px;
          }

          .hero p {
            font-size: 20px;
            max-width: 80%;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection
