import React from 'react'
import { Link } from 'react-router-dom'

const PorfileLink = () => {
  return (
    <>
      <div className="container-fluid mt-5 bg-light py-3 px-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <Link className="d-flex align-items-center gap-2 link-offset-2 link-underline link-underline-opacity-0" to="https://www.linkedin.com/in/re-hakim/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <i className="fa-brands fa-linkedin fs-3" style={{ color: "#0A66C2" }}></i>
              <span className="fs-5">LinkedIn</span>
            </Link>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <p className="m-0 fs-5">Email: jonshem@gmail.com</p>
          </div>
        </div>
      </div> 
    </>
  )
}

export default PorfileLink
