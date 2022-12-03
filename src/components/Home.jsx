import Navbar from '../components/Navbar.jsx'
import '../components/Home.css';
import i8 from '../ap-balances.webp'
import i1 from '../centrifuge.webp';
import i2 from '../dlab-pipettes.webp';
import i3 from '../electronic-balance.webp';
import i4 from '../rotary-evaporator.webp';
import i5 from '../shimadzu-balances.webp';
import i6 from '../spectrometer.webp';
import i7 from '../ua-balances.webp';
import Address from './Address.jsx';
import Footer from './Footer.jsx';
import Enquiry from './Enquiry.jsx';

function Home(){
    return (
        <div className="home">
            <Navbar/>
            <div className = "home1">
                <div className="home1_p">LabChems is one of the leading suppliers of laboratory</div>
                <div className="home1_p">chemicals and equipment</div>
                <button className="b1">Learn More</button>
            </div>

            <div className = "home2">
                <h2>Products</h2>
                <div className="home2_images">
                    <div className="grid1"><img src={i1} alt="NA"/><br/>Centrifuge</div>
                    <div className="grid1"><img src={i2} alt="NA"/><br/>Electronic Pipette</div>
                    <div className="grid1"><img src={i3} alt="NA"/><br/>UniBloc Balance</div>
                    <div className="grid1"><img src={i4} alt="NA"/><br/>Balance</div>
                    <div className="grid1"><img src={i5} alt="NA"/><br/>Animal Balances</div>
                    <div className="grid1"><img src={i6} alt="NA"/><br/>UniBloc Balance</div>
                    <div className="grid1"><img src={i7} alt="NA"/><br/>Spectrophotometer</div>
                    <div className="grid1"><img src={i8} alt="NA"/><br/>Distilling & Mixing</div>
                </div>
                <button className="b1">Learn More</button>
            </div>

            <div className = "home3">
                <div className="home2_p">We are proud to have a successful relationship with the</div>
                <div className="home2_p">customers by meeting their expectations on quality</div>
                <div className="home2_p">and timely service.</div>
                <button className="b1">Learn More</button>
            </div>

            <Enquiry name="Send Your Query"/>
            <Address/>
            <Footer/>
        </div>
    )
}

export default Home;