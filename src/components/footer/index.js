import React from 'react'
import './footer.css'

const index = () => {
  return (
    <footer className="footer mt-5 py-3 bg-light">
        <div className="container mx-5 my-3">
            <div className="row border-bottom mb-3">
                <div className="col">
                    <h6>Rental Electornics</h6>
                    <ul className="no-bullet px-0" >
                        <li> <small className="text-muted">About Us</small></li>
                        <li> <small className="text-muted">Contact</small></li>
                        <li> <small className="text-muted">Career</small></li>
                    </ul>
                </div>

                <div className="col">
                    <h6>Information</h6>
                    <ul className="no-bullet px-0" >
                        <li> <small className="text-muted">Blog</small></li>
                        <li> <small className="text-muted">FAQs</small></li>
                    </ul>
                </div>

                <div className="col">
                    <h6>Policies</h6>
                    <ul className="no-bullet px-0" >
                        <li> <small className="text-muted">Privacy Policy</small></li>
                        <li> <small className="text-muted">Cancelation</small></li>
                        <li> <small className="text-muted">Rental Terms and Conditions </small></li>

                    </ul>
                </div>

            </div>
            <small className="text-muted">&copy; Copyright 2022, Rental Electronics</small> 
        </div>

    </footer>

  )
}

export default index