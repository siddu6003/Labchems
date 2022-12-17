import Navbar from "./Navbar";
import Address from "./Address";
import Footer from "./Footer";
import '../components/Products.css';
import p1 from '../p1.webp';
import p2 from '../p2.webp';
import p3 from '../p3.webp';
import p4 from '../p4.webp';
import p6 from '../p6.webp';
import p7 from '../p7.webp';
import p8 from '../p8.webp';
import Product from "./Product";

function Products(){
    return (
        <div>
            <Navbar/>
            <div className="products">
                <Product name="Nitrogen Evaporators" src = {p1} des="Nitrogen evaporators are used to prepare samples for analysis. Used in several industries, such as food, biotechnology, analytical chemistry, petroleum and environmental sciences, Nitrogen Evaporators prepare sample by evaporation using combination of heat and nitrogen to concentrate samples for further testing on systems like HPLC, GC or Mass Spectrometry." />
                <Product name="Solid Phase Extraction System" src = {p2} des="Solid-phase extraction (SPE) is a sample preparation process by which compounds that are dissolved or suspended in a liquid mixture are separated from other compounds in the mixture according to their physical and chemical properties." />
                <Product name="Animal Balances" src = {p3} des="The UW BX-K Plus, BW-K Plus series of electronic balances for weighing animals provides a reliable way for weighing live animals. Upon removing the animal the weight of the remaining feces and output are automatically tared off, and the balance is ready for the next animal." />
                <Product name="Advanced Performance Unibloc Balances" src = {p4} des="The UniBloc AP technology balances have the fatest response in its class. These Shimadzu balances boast a one-piece UniBloc weighing sensor, which is now more advanced and offers 1.5 senconds response." />
                <Product name="High Precision Electronic Balances" src = {p6} des="The BL Series provides a high-precision electro-magnetic system that is just as compact as a portable scale. High stability and very quick response makes a great difference for your work environment. Ability to connect a optional EP-90/ 90 printer and an optional interface to enable communication with a PC." />
                <Product name="Portable Electronic Balance" src = {p7} des="Level indicator and adjustable legs are part of our design to enable accurate weighing. Fast read-out and high stability save time and increase your productivity.Long battery life capacity of 40 hours and auto-power-off function prevents unnecessary consumption of batteries." />
                <Product name="Printers for Shimadzu Balances" src = {p8} des="OLED dot matrix display, Protect date setting by password. Enables printng time and date information even with a balance that doesn’t have a clock function. Enhanced support for ISO/GLP. Automatically sets the appropriate communication with a balance." />
            </div>
            <Address/>
            <Footer/>
        </div>
    )
}

export default Products;