import React from "react"
import "./SideDrawer.css"

const sideDrawer = ({ togglemenu, clicked }) => {
  let classes = ["sidedrawer", "Close"]
  if (togglemenu) {
    classes = ["sidedrawer", "Open"]
  }
  return (
    <div className={classes.join(" ")}>
      <div className="close" onClick={() => clicked}>
        X
      </div>
      <div className="ds">
        <p>Design</p>
        <p>Code</p>
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
