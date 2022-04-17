import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Register from './Register'
import RegisterPersonalInfo from './RegisterPersonalInfo'
import RegisterAdditionalInfo from './RegisterAdditionalInfo'

const index = () => {
  return (
      <>        
        <div className="container my-6">
            <div className="row">
                <Routes>
                    <Route index element={<Register/>}/>
                    <Route path="/1" element={<RegisterPersonalInfo/>}/> 
                    <Route path="/2" element={<RegisterAdditionalInfo/>}/> 
                </Routes>

            </div>
        </div>
      </>
  )
}

export default index