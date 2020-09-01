import React from "react"
import Heading from "./Heading"
import {Link}  from "gatsby"

export default function DualInfoblock({heading , img}) {
    return (
        <section className="my-4 py-4 bg-theme">
         <div className="container">
           <Heading title={heading} />
            <div className="row">
              <div className="col-8 mx-auto">
                <p className="lead text-white mb-5">
                 Duis pariatur aute incididunt ut veniam tempor anim. Dolor laborum quis minim commodo anim ut cupidatat aute culpa dolor cillum adipisicing et proident. Consequat nisi consequat excepteur esse anim sint voluptate nisi. Lorem mollit ad magna cillum nulla esse irure. Sit nisi veniam aute mollit incididunt officia mollit do. Tempor ex minim exercitation ullamco ex velit nisi deserunt et ullamco cillum.
                 Qui reprehenderit do sit tempor elit elit Lorem esse amet incididunt nostrud. Aliquip qui ex exercitation id excepteur veniam elit nostrud nisi est consectetur. Dolore nostrud minim proident ad aute. Cupidatat exercitation labore ex non nisi amet excepteur.
                 </p>
              </div>
              <div className="col-4 mx-auto">
              <div class="card bg-dark" >
  <img src={img}
   class="card-img-top" alt="Image goes here" />
  <div class="card-body text-white">
    <h5 class="card-title">Just click photos</h5>
    <p class="card-text">Ipsum minim ex cillum aliqua sit tempor magna non mollit proident sunt ullamco aliqua. Commodo do excepteur exercitation eu. Cillum et culpa cupidatat veniam laboris laboris nisi nisi aliquip aute mollit consectetur magna duis.
    </p>
    
    <Link to="/" className="btn btn-warning btn-block">{heading}</Link>
    </div>
</div>
              </div> 
              </div>
         </div>
        </section>
    )
}