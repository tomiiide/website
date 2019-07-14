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
import Cursor from "../components/Cursor"

const pluginWrapper = () => {
  require("fullpage.js/vendors/scrolloverflow")
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openSide: false,
      loaded: false,
      activeSection: 0,
      fullpageApi: {},
    }
  }

  ToggleMenu = e => {
    this.setState(prevState => {
      return { openSide: !prevState.openSide }
    })
  }

  sectionChange = (origin, destination, direction) => {
    this.setState({ activeSection: destination.index });
    this.fullpageApi.reBuild();
  }

  render() {
    const { state } = this
    const _state = state
    return (
      <React.Fragment>
        <Head>
          <title> Tomide Oladipo </title>
          <link rel="icon" href="static/favicon.ico" />
        </Head>

        <div className="homepage">
          {state.loaded ? (
            <React.Fragment>
              <Cursor openSide={state.openSide}/>
              <SideDrawer
                clicked={this.ToggleMenu}
                togglemenu={state.openSide}
              />
              <Backdrop show={state.openSide} />
              <Logo
                clicked={this.ToggleMenu}
                sidebarOpen={state.openSide}
                loaded={state.loaded}
              />
            </React.Fragment>
          ) : null}

          <ReactFullpage
            licenseKey="4A80502E-A0AE42C6-A94FDFD9-8E6A4797"
            pluginWrapper={pluginWrapper}
            scrollOverflow={true}
            scrollOverflowReset={true}
            
            afterRender={() => {
              this.setState({ loaded: true })
            }}
            onLeave={this.sectionChange}
            render={({ state, fullpageApi }) => {
              this.fullpageApi = fullpageApi
              return ( 
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <HeroSection
                      clicked={this.ToggleMenu}
                      loaded={_state.loaded}
                      active={this.state.activeSection === 1}
                      fullpageApi={fullpageApi}
                    />
                  </div>
                  <div className="section">
                    <WorkComponent
                      loaded={_state.loaded}
                      active={this.state.activeSection === 1}
                    />
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
