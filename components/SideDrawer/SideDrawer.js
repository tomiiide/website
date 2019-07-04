import React from "react"

const sideDrawer = ({ togglemenu, clicked }) => {
  let classes = ["sidedrawer", "Close"]
  if (togglemenu) {
    classes = ["sidedrawer", "Open"]
  }
  return (
    <div className={classes.join(" ")}>
      <div className="ds">
        <p>Work</p>
        <p>Start a project</p>
      </div>
      <div className="socials">
        <p>SOCIALS</p>
        <div>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
        </div>
        <div>
          <a href="">Email</a>
          <a href="">Resume</a>
        </div>
        <div>
          <a href="">Dribble</a>
          <a href="">Behance</a>
        </div>
        <div>
          <a href="">GitHub</a>
          <a href="">Medium</a>
        </div>
        <div>
          <a href="">Scotch.io</a>
          <a href="">Dev.to</a>
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
            font-size: 15px;
          }

          .sidedrawer .socials div {
            display: flex;
          }

          .sidedrawer .socials a {
            text-decoration: none;
            color: black;
            width: 100px;
            margin-top: 10px;
            cursor: pointer;
          }

          .Open {
            transform: translateX(0);
          }

          .Close {
            transform: translateX(-100%);
          }
        `}
      </style>
    </div>
  )
}
export default sideDrawer
