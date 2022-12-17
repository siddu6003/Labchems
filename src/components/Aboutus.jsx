import Address from "./Address";
import Footer from "./Footer";
import Navbar from "./Navbar";
import '../components/Aboutus.css';
import about from '../about.webp'

function Aboutus(){
    return (
        <div>
            <Navbar/>
            <div className="abt">
                <h2>About Us</h2>
                <img className="img" src = {about} alt='no'/>
                <p className="p1">We are proud to have a successful relationship with the customers by meeting </p>
                <p className="p1">their expectations on quality and timely service. Our post-sales services are </p>
                <p className="p1">offered through our well trained, highly qualified and experienced service team.</p>
                <p className="p1"> We undertake Annual Maintenance Contracts for the equipment we supply. We also provide calibration services.</p>
            </div>
            <Address/>
            <Footer/>
        </div>
    )
}

export default Aboutus;