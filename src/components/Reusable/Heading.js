import React from "react"

export default function Heading({title}) {
    return (
        <div className="row">
         <div className="col text-center mb-4 text-white italic" >
          <h1 className="display-3 ">{title}</h1>
         </div>
         </div>

    )
}