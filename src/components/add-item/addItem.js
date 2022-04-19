import React from 'react'

const addItem = () => {
  return (
    
    <div className="container my-5">

      <div className="row">
      
      <div className="col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>

      <div className="col-sm-9 col-md-9 col-lg-8 col-xl-7"> 

      <form>
  
        <label for="category" className="text-muted mb-1">Choose Category</label>

          <div className="col mb-4">
            <select class="form-control">
              <option selected>Cateogry</option>
              <option value="1">Laptop</option>
              <option value="2">Game Console</option>
              <option value="3">Speaker</option>

            </select>
          </div>

        <label for="product-detail" className="text-muted mb-1">Product Detail</label>

          <div className="col form-floating mb-2">
              <input type="text" className="form-control" id="product-detail" placeholder="Brand" required/>
              <label for="product-detail">Brand</label>
          </div>

          <div className="col form-floating mb-3">
              <input type="text" className="form-control" id="product-detail" placeholder="Model Number" required/>
              <label for="product-detail">Model Number</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <small class="form-check-label text-muted" for="flexCheckChecked">
              Use Product Detail from Amazon
            </small>
          </div>

          <div className="col form-floating mb-2">
              <input type="text" className="form-control" id="product-detail" placeholder="Model Number" required/>
              <label for="product-detail">Features</label>
          </div>

          <div className="col form-floating mb-2">
              <input type="text" className="form-control" id="product-detail" placeholder="Model Number" required/>
              <label for="product-detail">Dimensions</label>
          </div>

          <div className="col form-floating mb-4">
              <textarea className="form-control" id="product-detail" placeholder="Description" rows="5"></textarea>
              <label for="product-detail">Description</label>
          </div>

        <label for="inputDob" className="text-muted mb-1">Condition</label>

        <div className="col mb-4">
          <select class="form-control">
              <option selected>Condition</option>
              <option value="1">Medicore</option>
              <option value="2">Good</option>
              <option value="3">Very Good</option>
              <option value="4">New</option>

            </select>
        </div>

        <div class="mb-3">
          <label for="formFileMultiple" className="form-label text-muted">Upload Product Photos</label>
          <input class="form-control" type="file" id="formFileMultiple" multiple/>
        </div>

        </form>
        <button type="button" class="btn btn-primary btn-lg px-5 rounded-pill">Save</button>
        <button type="button" class="btn btn-primary btn-lg px-5 rounded-pill">Post</button>


      </div>

      <div className="col-sm-1 col-md-1 col-lg-2 col-xl-3"> </div>


      </div>
    </div>
  )
}

export default addItem