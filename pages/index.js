import React, { Component } from "react"
import HeroSection from "../components/HomePage/HeroSection/HeroSection"
import WorkComponent from "../components/HomePage/WorkSection/WorkComponent"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import Backdrop from "../components/SideDrawer/Backdrop/Backdrop"
import Head from "next/head"
import ContactComponent from "../components/homepage/ContactSection/ContactComponent"
import Logo from "../components/homepage/Logo"
import "../styles/index.css"
import ReactFullpage from "@fullpage/react-fullpage"

const pluginWrapper = () => {
  require("fullpage.js/vendors/scrolloverflow")
}

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
    const { state } = this
    return (
      <React.Fragment>
        <Head>
          <title> Tomide Oladipo </title>
        </Head>
        <div className="homepage">
          <SideDrawer clicked={this.ToggleMenu} togglemenu={state.openSide} />
          <Backdrop show={state.openSide} />
          <Logo clicked={this.ToggleMenu} sidebarOpen={state.openSide} />

          <ReactFullpage
            licenseKey="4A80502E-A0AE42C6-A94FDFD9-8E6A4797"
            pluginWrapper={pluginWrapper}
            scrollOverflow={true}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <HeroSection clicked={this.ToggleMenu} />
                  </div>
                  <div className="section">
                    <WorkComponent />
                    <ContactComponent />
                  </div>
                </ReactFullpage.Wrapper>
              )
            }}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Home
