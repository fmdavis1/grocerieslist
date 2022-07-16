const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
       <div className=" row mb-3">
           <label className="form-label ms-2" htmlFor="productItem">Product Item</label>
               <div className="col-sm-4">
                   <input className='form-control ms-2' type="text" value={props.productItem} onChange={props.handleChange}  id="productItem"/>
               </div>
       </div>

       <div className="row mb-3">
       <label className="form-label ms-2" htmlFor="productBrand">Product Brand </label>
       <div className="col-sm-4">
       <input  className='form-control ms-2'  type="text" value={props.productBrand} onChange={props.handleChange}  id="productBrand"/>
       </div>
       </div>

       <div className="row mb-3">
       <label className="form-label ms-2" htmlFor="productUnits">Product Units</label>
       <div className="col-sm-4">
       <input className='form-control ms-2' type="text" value={props.productUnits} onChange={props.handleChange}  id="productUnits"/>
       </div>
       </div>


       <div className="row mb-3">
       <label className="form-label ms-2" htmlFor="productQuantity">Product Quantity</label>
       <div className="col-sm-4">
       <input className='form-control ms-2' type="number" value={props.productQuantity} onChange={props.handleChange} id="productQuantity"/>
       </div>
       </div>{" "}

       <input type="submit" className="btn btn-success"/>
       </form>
    )
}
export default Form