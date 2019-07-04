import React from "react"
import "./SideDrawer.css"

const sideDrawer = ({ togglemenu, clicked }) => {
  let classes = ["sidedrawer", "Close"]
  if (togglemenu) {
    classes = ["sidedrawer", "Open"]
  }
  return (
    <div className={classes.join(" ")}>
      <div className="close" onClick={clicked}>
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.6025 2.02927C8.14115 1.49062 9.01449 1.49062 9.55314 2.02927C10.0918 2.56793 10.0918 3.44126 9.55314 3.97991L3.70122 9.83183C3.16257 10.3705 2.28924 10.3705 1.75058 9.83183C1.21193 9.29318 1.21193 8.41985 1.75058 7.88119L7.6025 2.02927Z"
            fill="white"
          />
          <path
            d="M1.73722 3.68772C1.19857 3.14907 1.19857 2.27574 1.73722 1.73708C2.27588 1.19843 3.14921 1.19843 3.68786 1.73708L9.53978 7.589C10.0784 8.12766 10.0784 9.00099 9.53978 9.53964C9.00113 10.0783 8.12779 10.0783 7.58914 9.53964L1.73722 3.68772Z"
            fill="white"
          />
        </svg>
      </div>
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
    </div>
  )
}
export default sideDrawer