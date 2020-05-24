import React, { Component } from 'react'
import Aux from "../../hoc/Aux"
import Works from "./works"
import Work from "./Work/Work"
import posed, { PoseGroup } from "react-pose"

export default class WorkComponent extends Component {
  
  render() {
    const {  active } = this.props
    return (
      <Aux>
        <div className="workComponent">
          {active &&
            Works.map((work, i) => (
              <Work key={work.name} className="work" {...work} index={i} />
            ))}
    
        </div>
  
        <style>{`
          .work-header {
            display: flex;
            justify-content: space-between;
            padding-left: 10px;
            padding-top: 30px;
            border-top: 3px dotted #9e9e9e;
          }
  
          .work-header ul {
            list-style: none;
          }
  
          .work-header ul li {
            display: inline-block;
            margin: 0 10px 0 5px;
          }
  
          .work-header ul li a {
            text-decoration: none;
            color: white;
          }
  
          .workComponent {
            background-color: black;
            display: flex;
            flex-direction: column;
          }
  
          /* Desktops and laptops ----------- */
          @media only screen and (min-width: 1024px) {
            /* Styles */
            .workComponent {
              background-color: black;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
            }
          }
        `}</style>
      </Aux>
    )
  }
}

