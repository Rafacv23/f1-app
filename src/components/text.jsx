import React from "react"

const Text = (props) => {
  return (
        <p className={props.className} key={props.key}>
            {props.text}
        </p>
  )
}

export default Text
