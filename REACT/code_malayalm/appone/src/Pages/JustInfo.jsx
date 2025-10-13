import React from 'react'

function JustInfo(props) {
    const{
       onClick,
        textValue
    }=props
    console.log("Render Info")
  return (
    <div>
      Just Info {textValue}
    </div>
  )
}
const NewComp=React.memo(JustInfo,(prevProps,NextProps)=>{
    return true
})

export default NewComp



