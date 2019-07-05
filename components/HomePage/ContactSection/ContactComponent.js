import React from "react"

export default function ContactComponent() {
  return (
    <section className="contact">
      <h1>Have an idea for a product?</h1>
      <a href="http://bit.ly/talk-to-tomiiide" className="button">
        Let's talk
      </a>

      <style jsx>{`
        .button {
          text-decoration: none;
          border: 1px solid white;
          color: white;
          padding: 10px;
        }

        section.contact {
          padding: 80px 20px;
          display: flex;
          flex-direction: column;
          align-self: flex-start;
        }

        a.button {
          align-self: unset;
          width: fit-content;
        }
      `}</style>
    </section>
  )
}
