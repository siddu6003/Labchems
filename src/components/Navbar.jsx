import '../components/Navbar.css'
import image from '../lab.png'

function Navbar(){
    return(
        <div className='nav-main'>
            <img className="n-e-1" src={image} alt="random"/>
            <div className='itemsearch'>
                <a className='n-e' href='#home'>HOME</a>
                <a className='n-e' href='home'>ABOUT US</a>
                <a className='n-e' href='home'>PRODUCTS</a>
                <a className='n-e' href='home'>SERVICES</a>
                <a className='n-e' href='home'>ENQUIRIES</a>
            </div>
        </div>
    )
}

export default Navbar;