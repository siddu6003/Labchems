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
                <p className="about_p">LabChems is one of the leading suppliers of Laboratory chemicals and equipment to pharmaceuticals, biotech industries, aqua industries and academic institutions.

As an young organization we are striving to offer quality service and best solutions to our clients in the field of biotechnology and pharmaceuticals. We will work with our clients collaboratively and ensure their needs are met at rapid pace with competitive pricing.

Our team includes scientists with 10-20 years of experience in world class organizations who are always on the look out for latest technologies in the field and ready to adopt to the latest trends and challenges.</p>
            </div>
            <Address/>
            <Footer/>
        </div>
    )
}

export default Aboutus;