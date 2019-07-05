import React from "react"

const work = ({ name, image, text, color, link }) => (
  <a href={link}>
    <div className="work" href={link}>
      <div className="img-wrapper">
        <img src={image} alt="am" />
      </div>
    </div>
    <style jsx>{`
      .work {
        display: block;
      }

      a {
        text-decoration: none;
        cursor: pointer;
        display: block;
      }

      .work p {
        background-color: blueviolet;
        margin: 0;
        width: max-content;
        padding: 5px 25px 5px 10px;
        border-top-right-radius: 100px;
      }

      .img-wrapper{
        height: 400px;
        width: 100%;
        overflow: hidden;
      }

      img {
        height: auto;
        width: 100%;
      }

      /* Desktops and laptops ----------- */
      @media only screen and (min-width: 1024px) {
        /* Styles */
        a {
          width: 50%;
        }
      }
    `}</style>
  </a>
)
export default work
