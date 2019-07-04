import React from "react"

const backDrop = props =>
  props.show ? (
    <div className="backdrop">
      <style jsx>
        {`
          .backdrop {
            position: fixed;
            z-index: 7;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
          }
        `}
      </style>
    </div>
  ) : null
export default backDrop
