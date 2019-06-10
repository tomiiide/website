import React from "react"
import Aux from "../../hoc/Aux"
import "./WorkComponent.css"
import Images from "./images"
import Work from "./Work/Work"
const workComponent = props => (
  <Aux>
    <div className="work-header">
      <h3>Work</h3>
      <ul>
        <li>
          <a href="">All</a>
        </li>
        <li>
          <a href="">Design</a>
        </li>
        <li>
          <a href="">Code</a>
        </li>
      </ul>
    </div>
    <div className="workComponent">
      {Images.map(i => (
        <Work
          key={i.name}
          name={i.name}
          image={i.image}
          text={i.text}
          color={i.color}
        />
      ))}
    </div>
  </Aux>
)
export default workComponent
