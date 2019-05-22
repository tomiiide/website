import React from "react"

const works = [
  {
    name: "developondo.com",
    client: "Prunedge Technologies",
    images: [
      "/static/images/projects/developondo/mobile.jpg",
      "/static/images/projects/developondo/desktop.jpg",
      "/static/images/projects/developondo/desktop-2.jpg",
    ],
  },
  {
    name: "csimedia.xyz",
    client: "CSI Media",
    images: [
      "/static/images/projects/csimedia/mobile.jpg",
      "/static/images/projects/csimedia/desktop.jpg"
    ],
  },
  {
    name: "govee.us",
    client: "Startupbuilder",
    images: [
      "/static/images/projects/govee/mobile.jpg",
      "/static/images/projects/govee/desktop.jpg"
    ],
  },
  {
    name: "Swiftecare",
    client: "115Garage",
    images: [
      "/static/images/projects/swiftecare/mobile.jpg",
      "/static/images/projects/swiftecare/desktop.jpg"
    ],
  },
  {
    name: "ProManager",
    client: "115Garage",
    images: [
      "/static/images/projects/promanager/Landing Page Dark.jpg",
      "/static/images/projects/promanager/Select Team.jpg",
      "/static/images/projects/promanager/Landing Page.jpg",
      "/static/images/projects/promanager/Dashboard 2.jpg"
    ],
  },
  {
    name: "Agrowhisper",
    client: "Agrowhisper",
    images: [
      "/static/images/projects/agrowhisper/welcome.jpg",
      "/static/images/projects/agrowhisper/scan-empty.jpg",
      "/static/images/projects/agrowhisper/scan-detected.jpg",
      "/static/images/projects/agrowhisper/success.jpg"
    ],
  },
]

const WorkComponent = (props) => {

  const {
    name,
    link,
    images
  } = props;

  return (
    <div className="work">
    <h3 className="work-title">{name}</h3>
    <div className="images">
    {
       images.map( (image,i) => <img key={i} src={image} alt={ `${name}'s website` }/> ) 
    }
    </div>
    <a className="button" href={link}> View Project </a> 

    <style jsx>
    {`
      .work{
        display: flex;
        flex-direction: column;
        margin-bottom: 60px ;
      }

      .work .images {
        
        
      }

      .work-title {
        color: white;
      }

      .work .images img{
        margin: 16px 0;
        width: 100%;
      }

      .button {
        padding: 8px 16px;
        color: white;
        border: 1px solid white;
        background: black;
        align-self: center;
        text-decoration: none;
      }
    `}
    </style>
  </div>
  )
}

export default function WorksSection() {
  return (
    <section className="works">
      <p className="title">Works</p>

      {
        works.map( (work,i) => <WorkComponent key={i} name={work.name} link={""} images={work.images}/>)
      }

      <style jsx>
        {`
          section.works {
            background-color: black;
            padding: 20px;
            
          }

          .title {
            font-weight: bold;
            font-size: 36px;
            position: relative;
            color: white;
            margin: 0;
          }

          .title::after {
            position: absolute;
            left: 0;
            bottom: 8px;
            width: 20%;
            background-color: white;
            content: " ";
            height: 8px;
            border-radius: 8px;
            opacity: 0.9;
          }

          
        `}
      </style>
    </section>
  )
}
