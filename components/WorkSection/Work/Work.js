import React from "react"
import "./Work.css"
const WorkComponent = ({ name, link, images }) => (
  <div className="work">
    <h3 className="work-title">{name}</h3>
    <div className="images">
      {images.map((image, i) => (
        <img key={i} src={image} alt={`${name}'s website`} />
      ))}
    </div>
    <a className="button" href={link}>
      {" "}
      View Project{" "}
    </a>
  </div>
)
export default WorkComponent
