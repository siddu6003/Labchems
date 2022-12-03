import Navbar from "./Navbar";
import Address from "./Address";
import Footer from "./Footer";
import '../components/Service.css'

function Service(){
    return (
        <div>
            <Navbar/>
            <div className="service">
                <h2>Services</h2>
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

export default Service;