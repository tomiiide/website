import React, { Component } from "react"

export default class Background extends Component {

    state = {
        upX : -1,
        upY: -1
    }

    

  render() {
      const {upY, upX} = this.props;
    return (
      <div className="pic" >
        <svg
          className="blur"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
        >
          <image
            filter="url(#filter2)"
            xlinkHref="static/images/tomiiide-dark.jpg"
            width="100%"
            height="140%"
          />
          <filter id="filter2">
            <fegaussianblur stdDeviation="5" />
          </filter>
          <mask id="mask1">
            <circle
              cx={`${upX-5}px`}
              cy={`${upY}px`}
              r="80"
              fill="white"
              filter="url(#filter2)"
            />
          </mask>
          <image
            xlinkHref="static/images/tomiiide.jpg"
            width="100%"
            height="140%"
            mask="url(#mask1)"
          />
        </svg>

        <style>
            {`
                .pic{
                    width: 100%;
                    position: fixed;
                    z-index: 2;
                    top: -10px;
                    left: -10px;
                    overflow: hidden;
                    
                }
                .pic {
                    text-align: center;
                    
                    height:100vh;
                }
                .blur {
                    height: 100%;
                }
                .overlay {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    height: 100%;
                }

                /* Desktops and laptops ----------- */
          @media only screen and (min-width: 1024px) {
            /* Styles */
           .pic {
               display: block;
           }
          }
            `}
        </style>
      </div>
    )
  }
}
