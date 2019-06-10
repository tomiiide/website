import React from "react"
import Works from "../Works/Works"
import WorkComponent from "./Work/Work"
import "./WorkSection.css"

export default function WorksSection() {
  return (
    <section className="works">
      <p className="title">Works</p>

      {Works.map((work, i) => (
        <WorkComponent
          key={work.client + i}
          name={work.name}
          link={""}
          images={work.images}
        />
      ))}
    </section>
  )
}
