import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import * as profileService from "../services/profile-service"
import ListedItems from "./listed-items"


const MyItems = () => {
    let loggedIn = useSelector(state => state.loggedIn);
    let currentUser = useSelector(state => state.currentUser);
    const navigate = useNavigate();

    const [listings, setListings] = useState([]);

    const getListing = async () => {

        await profileService.findAllListingsByUser(currentUser._id).then(async (listings) => {
            listings.sort((listing1, listing2) => 
                new Date(listing2.postDate).getTime() -
                new Date(listing1.postDate).getTime());
             setListings(listings);
        });
        
    }

    useEffect(() => {
        if (!loggedIn) {
            navigate('/')
        }
        else{
            getListing();
        }
    }, []);

    const handleAddItem = async () => {
        navigate('/additem')
      }

  return (
    <div className="m-5">
    <div className="d-flex flex-row row">
        <div className="d-flex flex-column col bg-light border rounded">
            <div className="fs-3 fw-bold p-3">
                My Listed Items
            </div>


            { listings &&
                listings.map((listing) =>
                <ListedItems listing={listing} key={listing._id}/>)
            }

            { listings.length === 0 && 
                <div className="fs-4 text-center p-4">
                    Looks like you haven't listed any items
                </div>
            }
         
        </div>
        
        <div className="ms-3 d-flex flex-column col-3 rounded">
            
            <button className="btn btn-primary" onClick={handleAddItem}>Add Item</button>
        </div>
  
    </div>
</div>
  )
}

export default MyItems