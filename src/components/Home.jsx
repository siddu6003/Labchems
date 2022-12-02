import React from "react";
import Navbar from '../components/Navbar.jsx'
import '../components/Home.css';
import i1 from '../ap-balances.webp'
import i2 from '../centrifuge.webp';
import i3 from '../dlab-pipettes.webp';
import i4 from '../electronic-balance.webp';
import i5 from '../rotary-evaporator.webp';
import i6 from '../shimadzu-balances.webp';
import i7 from '../spectrometer.webp';
import i8 from '../ua-balances.webp';

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

            <div className = "home4">
                <h2>Ask Your Queries</h2>
                <div className="home4_input">
                    <label>Name</label>
                    <input></input>
                </div>
            </div>

            <div className = "home5">
                Address
            </div>

            <div className="home6">
                Footer
            </div>
        </div>
    )
}

export default Home;