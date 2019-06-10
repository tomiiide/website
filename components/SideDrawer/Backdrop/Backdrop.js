import React from "react"
import "./Backdrop.css"
const backDrop = props => (props.show ? <div className="backdrop" /> : null)
export default backDrop
