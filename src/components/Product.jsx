import '../components/Product.css'

function Product(props){
    return(
        <div className = 'pro'>
            <h2>{props.name}</h2>
            <img src={props.src} alt='no'/>
            <p className='product_p'>{props.des}</p>
        </div>
    )
}

export default Product;