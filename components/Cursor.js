import React, { Component } from "react"
import posed from "react-pose"

const Icon = posed.svg({})

export default class Cursor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: {
        x: -100,
        y: -100,
      },
    }
  }

  componentDidMount() {
    this.loadCursor()
  }

  loadCursor() {
    document.addEventListener("mousemove", e => {
      const clientX = e.clientX
      const clientY = e.clientY

      this.setState({
        position: {
          x: clientX - 16,
          y: clientY - 16,
        },
      })
    })
  }

  getFill(){
    const {openSide} = this.props;

    return openSide ? "black" : "white";
  }

  render() {
    const { position } = this.state

    return (
      <div
        className="cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
      

        <style jsx>{`
          .cursor {
            position: fixed;
            transition: all 0.1s ease-in-out;
            z-index: 40;
            pointer-events: none;
          }

          .cursor {
           
            transition-duration: 200ms;
            transition-timing-function: ease-out;
            animation: cursorAnim 0.5s infinite alternate;
            pointer-events: none;
          }

          @keyframes cursorAnim {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(0.7);
            }
          }

          @keyframes cursorAnim2 {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(0.4);
            }
          }

          @keyframes cursorAnim3 {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(3);
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    )
  }
}
