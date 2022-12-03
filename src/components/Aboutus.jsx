import Address from "./Address";
import Footer from "./Footer";
import Navbar from "./Navbar";
import '../components/Aboutus.css';

function Aboutus(){
    return (
        <div>
            <Navbar/>
            <div className="abt">
                <h2>About Us</h2>
                <p>We are proud to have a successful relationship with the customers by meeting </p>
                <p>their expectations on quality and timely service. Our post-sales services are </p>
                <p>offered through our well trained, highly qualified and experienced service team.</p>
                <p> We undertake Annual Maintenance Contracts for the equipment we supply. We also provide calibration services.</p>
            </div>
            <Address/>
            <Footer/>
        </div>
    )
}

export default Aboutus;