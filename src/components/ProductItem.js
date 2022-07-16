const ProductItem = (props) => {
    const {item, brand, units, quantity} = props.product
  
    console.log('from product item->', props.product);
      return(
          <div onClick={ () => props.addToCart(props.product) }>
            <h3>{item}</h3>
            <h3>{brand}</h3>
            <h3>{units}</h3>
            <h2> {quantity}</h2>
          </div> 
      )
  }
  
  export default ProductItem