import React from "react"
import posed from "react-pose"

const Details = posed.div({
  enter: { height: "100%", delay: 300 },
  exit: { height: 0 },
})

const Work = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: ({ index }) => (index + 1) * 500,
  },
  exit: { x: -100, opacity: 0, delay: 500 },
})

const work = ({ name, image, text, color, link, index, last, active }) => {
  return (
    <React.Fragment>
      {last ? (
        <Work className="work last" index={index} initialPose="exit" pose="enter">
          <div className="details">
            <p>Empty space here, have an idea to fill it up?</p>
            <a href="http://bit.ly/talk-to-tomiiide" target="_blank" className="button">
              Let's talk
            </a>
          </div>
        </Work>
      ) : (
        <Work className="work" index={index} initialPose="exit" pose="enter">
          <Details initialPose={"exit"} pose={"enter"} className="details">
            <p>{name}</p>
            <a target="_blank" href={link}>Read Case Study</a>
          </Details>

          <div className="img-wrapper">
            <img src={image} alt="am" />
          </div>
        </Work>
      )}
      <style>{`
      .work .details {
        position: absolute;
        background: rgba(0,0,0,0.4);
        color: white;
        height: 100%;
        width: 100%;
        z-index: 8;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .work .details a {
      
        text-decoration: none;
      }
      .work {
        display: block;
        overflow: hidden;
        height: 240px;
        position: relative;
        width: 100%;
      }

      a {
        text-decoration: none;
        cursor: none;
        display: block;
      }

      .img-wrapper {
        height: 260px;
        width: 100%;
        overflow: hidden;
      }

      img {
        height: auto;
        width: 100%;
      }

      /* Desktops and laptops ----------- */
      @media only screen and (min-width: 1024px) {
        /* Styles */
        .work {
          width: 50%;
          height: 360px;
        }

        .img-wrapper {
          height: 360px;
        }
      }
    `}</style>
    </React.Fragment>
  )
}

export default work
