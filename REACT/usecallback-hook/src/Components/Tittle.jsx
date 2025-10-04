import React from 'react'

function Tittle() {
    console.log("Rendering Title")
  return (
    <h2>
      useCalback HooK
    </h2>
  )
}

export default React.memo(Tittle)
