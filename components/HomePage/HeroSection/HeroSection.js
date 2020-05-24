import React, {Component} from "react"
import SplitText from "react-pose-text"
import posed, { PoseGroup } from "react-pose"
import Background from './Background';


const SubText = posed.div({
  enter: { opacity: 1, beforeChildren: true, staggerChildren: 100 },
  exit: { opacity: 0},
})

const typewriter = {
  exit: { opacity: 0, x: 20 },
  enter: {
    opacity: 1,
    x: 0,
    delay: ({ charIndex }) => charIndex * 100,
  },
}

const Text = posed.div({
  enter: { opacity: 1, height: "auto", delay: 500 },
  exit: { opacity: 0, height: 0 }
})

const HeroText = posed.h2({
  enter: {
    opacity: 1,
    beforeChildren: true,
    staggerChildren: 1000,
  },
  exit: { opacity: 0, },
})

const Button = posed.a({
  enter: {
    opacity: 1,
    scale: 1
  },
  exit: {
    opacity:0,
    scale: 0
  }
})

export default class HeroSection extends Component {


  constructor(props) {
    super(props);

    this.state = {
      heroTextAnimated: false,
      subTextAnimated: false,
      upX : -1,
        upY: -1
    }
  }

  handleMouseMove = (event) => {
    event.preventDefault();
    var upX = event.clientX;
    var upY = event.clientY;

    this.setState({
        upX,
        upY
    });
}

  render() {
    const {clicked, loaded, fullpageApi} = this.props;
    const {heroTextAnimated, subTextAnimated, upX, upY} = this.state;
    return (
      <section className="hero" onMouseMove={this.handleMouseMove}>
        <Background upX={upX} upY={upY}/>
        <div className="content">
        <HeroText className="hero-text" initialPose="exit" pose="enter" onPoseComplete={() => { this.setState({heroTextAnimated:true})}}>
          <Text initialPose="exit" pose="enter">
            Hiii,
            <br />
          </Text>
  
          <Text initialPose="exit" pose="enter">
            my name is,
            <br />
          </Text>
  
          <Text initialPose="exit" pose="enter">
            tomide oladipo.
          </Text>
        </HeroText>
        <div style={{ color: "white" }}>
          <SubText className="sub-text" pose={heroTextAnimated ? "enter" : "exit"} initialPose="exit" onPoseComplete={(pose) => { if(pose=="enter") this.setState({subTextAnimated:true})}}>
            <SplitText charPoses={typewriter}>
              I build products that deliver excellent user experience.
            </SplitText>
            <br /> <br />
            <SplitText  charPoses={typewriter} >
              I’m fascinated by how design and technology interact to transform solutions into memorable experiences.
            </SplitText>
          </SubText>
          
          <Button onClick={() => {fullpageApi.moveSectionDown() }} className="button" pose={subTextAnimated ? "enter" : "exit"} initialPose="exit">
          View my work
          </Button>
        </div>
        </div>
  
        <style>{`
  
          section.hero {
            padding: 40px 10px 60px;
            font-size: 36px;
            margin-bottom: 40px;
            visibility: ${loaded ? "visible" : "hidden"};
          }

          .content {
            position: relative;
            z-index:3;
          
          }
  
          * {
            animation-fill-mode: both;
          }
  
          
          section.hero hero-text {
            padding-bottom: 10px;
            margin-top: 40px;
          }
  
          section.hero .sub-text {
            font-size: 14px;
          }

          .button {
            margin: 40px 0 0;
            display: block;
          }
  
          /* Desktops and laptops ----------- */
          @media only screen and (min-width: 1024px) {
            /* Styles */
            section.hero-text {
              margin-top: 120px;
            }
  
            section.hero {
              font-size: 42px;
            }
  
            section.hero .sub-text {
              font-size: 20px;
              max-width: 80%;
            }
          }
        `}</style>
      </section>
    )
  }
}

