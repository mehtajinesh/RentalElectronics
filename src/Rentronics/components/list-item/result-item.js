import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";


const ResultItem = ({products}) => {
    let items = new Array(products.length).fill(true);
    let detailItems = new Array(products.length).fill(false);

    const [select, setSelected] = useState(items);
    const [detail, setDetail] = useState(detailItems);

    // const [showMoreDetail, setShowMoreDetail] = useState(false);
    const dispatch = useDispatch();

    const onClickProduct = (index) => {
        console.log("clicked!", index);
        let cloneSelect = [...select];
        cloneSelect[index] = !cloneSelect[index];
        setSelected(cloneSelect);
        handleChooseProduct(index);
    };
  
    const onClickDetail = (index) => {
        console.log("clicked!", index);
        let cloneSelect = [...detail];
        cloneSelect[index] = !cloneSelect[index];
        console.log(cloneSelect);
        setDetail(cloneSelect);
    };

    const productButton = (index) => {
      return (
        <button className="btn btn-primary px-2 py-2" 
            type="button" 
            onClick={() => onClickProduct(index)}> 
            Select Item
        </button>
      );
    };

    const detailButton = (index) => {
        return (
          <button className="btn btn-outline-secondary px-2 py-2" 
              type="button" 
              onClick={() => onClickDetail(index)}> 
              See More Detail
          </button>
        );
      };
  
    const handleChooseProduct = (index) => {
        const product = products[index];
        console.log(product);
        dispatch({
            type: 'SELECT_PRODUCT',
            product
          });
      
    }

  return (
     products.map( (result, index) => {
         return(
            <>
            <div className="card mb-3 my-5 mx-4 shadow-sm">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={result.image} className="img-fluid rounded-start mx-1 my-2" alt="..."/>
                </div>

                <div className="col-md-8">
                    <div className="card-body">    
                        <h5 className="card-title">{result.name}</h5>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                            {detailButton(index)}
                            {productButton(index)}
                    </div>
        
                    {
                        detail[index] && 
                        <div className="bg-light my-3 px-3 py-3 rounded shadow-sm">

                            {
                                result.details.map(item => {
                                    return (
                                        <>
                                            <small className="text-muted">{item.name} : {item.value}</small>
                                            <br></br>
                                        </>
                                    )
                                })
                            }

                        </div>
                    }

                </div>
                </div>

                </div>
            </div>
        </>
      )
      }
      ))
    };
export default ResultItem