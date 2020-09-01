import React from 'react'
import Heading from "./Heading"
import {Link} from "gatsby"

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
         <div className="container">
          <Heading title={heading} />
          <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
             <p className="lead text-white mb-4">
             Dolore sunt voluptate do labore officia aliquip. Proident non anim quis consequat ut anim amet ex. Esse elit excepteur et dolor laboris id est amet. Dolore minim quis qui pariatur occaecat amet minim pariatur. Fugiat tempor ad culpa deserunt ea quis commodo id. Ad laboris nostrud minim consectetur deserunt amet mollit eu consequat tempor sint elit esse fugiat. 
             </p>
             <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button> 
            </Link>
            </div>
          </div>
         </div>
            
        </section>
    )
}
