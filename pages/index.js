import React, { Component } from "react"
import HeroSection from "../components/HomePage/HeroSection/HeroSection"
import WorkComponent from "../components/HomePage/WorkComponent/WorkComponent"
import WorksSection from "../components/WorkSection/WorksSection"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import Backdrop from "../components/SideDrawer/Backdrop/Backdrop"
import Head from "next/head"
import ContactComponent from  "../components/contact/ContactComponent";
import "../styles/index.css"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openSide: false,
    }
  }

  ToggleMenu = e => {
    console.log(e.target)
    this.setState(prevState => {
      return { openSide: !prevState.openSide }
    })
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <title> Tomide Oladipo </title>
        </Head>

        <div className="homepage">
          <SideDrawer
            clicked={this.ToggleMenu}
            togglemenu={this.state.openSide}
          />
          <Backdrop show={this.state.openSide} />
          <HeroSection clicked={this.ToggleMenu} />
          <WorkComponent />
          <ContactComponent/>
        </div>

        {/* <WorksSection /> */}
      </React.Fragment>
    )
  }
}

export default Home
