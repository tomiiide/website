import React from "react"

export default function ContactComponent() {
  return (
    <section className="contact">
      <p>Have an idea for a product?</p>
      <a href="http://bit.ly/talk-to-tomiiide" className="button">
        Let's talk
      </a>

      <style>
        {`
                    .button {
                        text-decoration: none;
                        border: 1px solid white;
                        color: white;
                        padding: 10px;    
                    }


section.contact {
    padding: 0 20px 40px ;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    }
    
    a.button{
        align-self: unset;
    }
                `}
      </style>
    </section>
  )
}
