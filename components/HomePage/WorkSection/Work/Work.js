import React from "react"

const work = ({ name, image, text, color, link }) => (
  <a href={link}>
    <div className="work" href={link}>
      <p style={{ backgroundColor: color, color: text }}>{name}</p>
      <img src={image} alt="am" />
    </div>
    <style jsx>
      {`
      .work {
        margin-bottom: 30px;
        margin-top: 50px;
        display: block;
    }
    
    a{
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
    
    img {
        height: auto;
        width: 100%;
    }
      `}
    </style>
  </a>
)
export default work
