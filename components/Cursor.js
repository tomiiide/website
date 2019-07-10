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
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.4665 14.5058C30.2071 14.1732 29.7274 14.1141 29.3948 14.3733C29.0623 14.6327 29.003 15.1124 29.2623 15.445C29.5172 15.7719 29.5172 16.2283 29.2623 16.5552C27.3946 18.9499 24.9779 20.7493 22.2573 21.8372C23.6872 20.3062 24.5628 18.2531 24.5628 16.0001C24.5628 13.7559 23.6946 11.7102 22.2768 10.1824C23.8489 10.8145 25.3267 11.6833 26.6497 12.768C26.8139 12.9026 26.9776 13.0421 27.1366 13.1829C27.4523 13.4624 27.9348 13.4331 28.2144 13.1174C28.4939 12.8017 28.4646 12.3191 28.1489 12.0396C27.9756 11.886 27.7969 11.7338 27.6179 11.5871C24.3541 8.91119 20.2281 7.4375 16 7.4375C10.3098 7.4375 5.037 10.0138 1.53356 14.5059C0.847374 15.3857 0.847374 16.6146 1.53356 17.4945C5.037 21.9866 10.3098 24.5629 16 24.5629C21.6901 24.5629 26.9629 21.9866 30.4665 17.4945C31.1527 16.6145 31.1527 15.3856 30.4665 14.5058ZM2.73775 16.5552C2.48287 16.2283 2.48287 15.7719 2.73775 15.445C4.60506 13.0507 7.02119 11.2516 9.74131 10.1635C8.31287 11.6938 7.43719 13.7461 7.43719 16.0001C7.43719 18.2533 8.31281 20.3063 9.74125 21.8367C7.02119 20.7486 4.605 18.9494 2.73775 16.5552ZM16.0093 23.0355C16.0062 23.0355 16.0032 23.0356 16.0001 23.0356C15.9969 23.0356 15.9939 23.0355 15.9908 23.0355C12.1154 23.0305 8.96431 19.8766 8.96431 16.0001C8.96431 12.1235 12.1153 8.96962 15.9908 8.96462C15.9939 8.96462 15.9969 8.96456 16.0001 8.96456C16.0024 8.96456 16.0048 8.96462 16.0072 8.96462C19.8836 8.96844 23.0357 12.1228 23.0357 16.0001C23.0357 19.8766 19.8847 23.0305 16.0093 23.0355Z"
            fill={this.getFill()}
          />
          <path
            d="M16 12.7598C14.2133 12.7598 12.76 14.2131 12.76 15.9998C12.76 17.7865 14.2133 19.2398 16 19.2398C17.7867 19.2398 19.24 17.7865 19.24 15.9998C19.24 14.2131 17.7867 12.7598 16 12.7598ZM16 17.7126C15.0558 17.7126 14.2871 16.944 14.2871 15.9998C14.2871 15.0555 15.0558 14.2869 16 14.2869C16.9443 14.2869 17.7129 15.0555 17.7129 15.9998C17.7129 16.944 16.9443 17.7126 16 17.7126Z"
            fill={this.getFill()}
          />
          <path
            d="M16.0001 0C15.5783 0 15.2365 0.341812 15.2365 0.763563V3.62687C15.2365 4.04862 15.5783 4.39044 16.0001 4.39044C16.4218 4.39044 16.7636 4.04862 16.7636 3.62687V0.763563C16.7636 0.341812 16.4218 0 16.0001 0Z"
            fill={this.getFill()}
          />
          <path
            d="M16.0001 27.6094C15.5783 27.6094 15.2365 27.9512 15.2365 28.3729V31.2362C15.2365 31.658 15.5783 31.9998 16.0001 31.9998C16.4218 31.9998 16.7636 31.658 16.7636 31.2362V28.3729C16.7636 27.9512 16.4217 27.6094 16.0001 27.6094Z"
            fill={this.getFill()}
          />
          <path
            d="M27.3138 4.68648C27.0156 4.38836 26.5322 4.38836 26.2338 4.68648L24.8092 6.11117C24.511 6.40936 24.511 6.8928 24.8092 7.19111C24.9583 7.34017 25.1536 7.41473 25.3491 7.41473C25.5445 7.41473 25.7398 7.34017 25.889 7.19111L27.3138 5.76642C27.612 5.46823 27.612 4.9848 27.3138 4.68648Z"
            fill={this.getFill()}
          />
          <path
            d="M7.19091 24.809C6.89279 24.511 6.40935 24.5109 6.1111 24.809L4.68629 26.2337C4.3881 26.5319 4.3881 27.0153 4.68629 27.3136C4.83541 27.4627 5.03085 27.5373 5.22622 27.5373C5.4216 27.5373 5.61697 27.4627 5.76616 27.3136L7.19097 25.889C7.4891 25.5907 7.4891 25.1073 7.19091 24.809Z"
            fill={this.getFill()}
          />
          <path
            d="M7.19089 6.11123L5.76608 4.68648C5.46789 4.38836 4.98445 4.38836 4.68626 4.68648C4.38808 4.9848 4.38814 5.46817 4.68626 5.76642L6.11108 7.19111C6.26014 7.34017 6.45564 7.41473 6.65101 7.41473C6.84639 7.41473 7.04189 7.34017 7.19095 7.19111C7.48908 6.8928 7.48901 6.40942 7.19089 6.11123Z"
            fill={this.getFill()}
          />
          <path
            d="M27.3137 26.2337L25.889 24.809C25.5907 24.5109 25.1074 24.5109 24.8091 24.809C24.5109 25.1074 24.5109 25.5907 24.8091 25.889L26.2339 27.3137C26.383 27.4627 26.5785 27.5373 26.7738 27.5373C26.9692 27.5373 27.1646 27.4627 27.3138 27.3137C27.612 27.0153 27.612 26.5319 27.3137 26.2337Z"
            fill={this.getFill()}
          />
        </svg>

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
