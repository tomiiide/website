import React from "react"
import "./Work.css"
const work = ({ name, image, text, color }) => (
  <div className="work">
    <p style={{ backgroundColor: color, color: text }}>{name}</p>
    <img src={image} alt="am" />
  </div>
)
export default work
