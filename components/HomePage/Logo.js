import React from "react"
import LogoIcon from "../icons/Logo"
import pose from "react-pose"

const LogoAnimation = pose.div({
  enter: { opacity: 1, scale: 1, transition: {duration: 1200 ,type: 'spring', stiffness: 100 } },
  exit: { opacity: 0, scale: 0 },
})

const Logo = ({ clicked, sidebarOpen,loaded }) => {
  return (
    <LogoAnimation className="logo" onClick={clicked} initialPose="exit" pose="enter">
      {sidebarOpen ? (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22Z"
            fill="black"
          />
          <path
            d="M23.6025 18.0293C24.1412 17.4906 25.0145 17.4906 25.5531 18.0293C26.0918 18.5679 26.0918 19.4413 25.5531 19.9799L19.7012 25.8318C19.1626 26.3705 18.2892 26.3705 17.7506 25.8318C17.2119 25.2932 17.2119 24.4198 17.7506 23.8812L23.6025 18.0293Z"
            fill="white"
          />
          <path
            d="M17.7372 19.6877C17.1986 19.1491 17.1986 18.2757 17.7372 17.7371C18.2759 17.1984 19.1492 17.1984 19.6879 17.7371L25.5398 23.589C26.0784 24.1277 26.0784 25.001 25.5398 25.5396C25.0011 26.0783 24.1278 26.0783 23.5891 25.5396L17.7372 19.6877Z"
            fill="white"
          />
        </svg>
      ) : (
        <LogoIcon />
      )}

      <style>{`
        .logo {
          cursor: pointer;
          position: fixed;
          width: fit-content;
          top: 40px;
          left: 10px;
          z-index: 99;
        }
      `}</style>
    </LogoAnimation>
  )
}

export default Logo
