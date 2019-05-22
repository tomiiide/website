import React from "react"
import HeroSection from "./../components/homepage/HeroSection";
import WorksSection from "./../components/homepage/WorksSection";
import Head from "next/head";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title> Tomide Oladipo </title>
      </Head>

      <HeroSection/>
      <WorksSection/>
    </React.Fragment>
  )
}

export default Home
