import React from "react"

const sideDrawer = ({ togglemenu, clicked }) => {
  let classes = ["sidedrawer", "Close"]
  if (togglemenu) {
    classes = ["sidedrawer", "Open"]
  }
  return (
    <div className={classes.join(" ")}>
      <div className="ds">
        <a href="#work">
          <p>My work</p>
        </a>
        <a href="http://bit.ly/talk-to-tomiiide" target="_blank">
          <p>Start a project</p>
        </a>
      </div>
      <div className="socials">
        <p>SOCIALS</p>
        <div>
          <a href="https://twitter.com/tomiiide">Twitter</a>
          <a href="https://instagram.com/tomiiide">Instagram</a>

          <a href="mailto:ayotomiiide@gmail.com">Email</a>
          <a href="https://visualcv.com/tomiiide">Resume</a>

          <a href="https://dribbble.com/tomiiide">Dribbble</a>
          <a href="https://behance.net/tomiiide">Behance</a>

          <a href="https://github.com/tomiiide">GitHub</a>
          <a href="https://medium.com/tomiiide">Medium</a>
        </div>
      </div>
      <style jsx>
        {`
          .sidedrawer {
            z-index: 10;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: white;
            color: black;
            transition: transform 0.3s ease-in-out;
            padding-top: 80px;
          }

          .sidedrawer .ds {
            margin-left: 30px;
          }

          .sidedrawer .ds p {
            font-size: 40px;
          }

          .sidedrawer .close {
            background-color: black;
            color: white;
            height: 44px;
            width: 44px;
            border-radius: 50%;
            margin: 20px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .sidedrawer .socials {
            margin-left: 30px;
          }

          .sidedrawer .socials p {
            font-size: 12px;
          }

          .sidedrawer .socials div {
            display: flex;
            flex-wrap: wrap;
          }

          .sidedrawer .socials a {
            text-decoration: none;
            color: black;
            width: 140px;
            margin-top: 10px;
            cursor: pointer;
            font-size: 18px;
            padding: 10px 0 20px;
          }

          .Open {
            transform: translateX(0);
          }

          .Close {
            transform: translateX(-100%);
          }

          a {
            color: black;
          }

          /* Desktops and laptops ----------- */
          @media only screen and (min-width: 1024px) {
            /* Styles */
            .sidedrawer .socials a {
              width: 200px;
            }
          }
        `}
      </style>
    </div>
  )
}
export default sideDrawer
