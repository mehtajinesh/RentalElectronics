import React from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import Register from './register'
import RegisterPersonalInfo from './register-personal-info'
import RegisterAdditionalInfo from './register-additional-info'

const index = () => {
  return (
      <>        
        <div className="container my-6">
            <div className="row">

              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>
              
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-8 col-xl-6 login-box">

                  <div className="login-title text-center px-3 py-3 fg-bold border-bottom border-grey">
                    Sign Up
                  </div>

                  <Routes>
                      <Route index element={<Register/>}/>
                      <Route path="/1" element={<RegisterPersonalInfo/>}/> 
                      <Route path="/2" element={<RegisterAdditionalInfo/>}/> 
                  </Routes>
                
              </div>

            </div>
          
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>

        </div>
      </>
  )
}

export default index