import '../components/Navbar.css'
import image from '../lab.png'

function Navbar(){
    return(
        <div className='nav-main'>
            <img className="n-e-1" src={image} alt="random"/>
            <div className='itemsearch'>
                <a className='n-e' href='/'>HOME</a>
                <a className='n-e' href='aboutus'>ABOUT US</a>
                <a className='n-e' href='products'>PRODUCTS</a>
                <a className='n-e' href='service'>SERVICES</a>
                <a className='n-e' href='enquiries'>ENQUIRIES</a>
            </div>
        </div>
    )
}

export default Navbar;