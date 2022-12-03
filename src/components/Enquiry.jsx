import '../components/Enquiry.css'

function Enquiry(props){
    return(
        <div className='enq'>
            <h2>{props.name}</h2>
            <form>
                <input placeholder='Name'></input>
                <input placeholder='Email'></input>
                <input placeholder='Phone'></input>
                <input placeholder='Comment'></input>
                <button className="b1" onClick={null}>Submit</button>
            </form>
        </div>  
    )
}

export default Enquiry;