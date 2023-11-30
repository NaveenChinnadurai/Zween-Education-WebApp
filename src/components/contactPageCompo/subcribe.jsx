import '../../styles/compoStyles/contactStyles/subcribe.css'

function Subcribe(props) {
    return (
        <div className="subcribe-div" id={props.id}>
            <h2>Subscribe to our Newsletter</h2>
            <input type="text" placeholder='Your E-mail Address' />
            <p>Subscribe</p>
        </div>
    )
}

export default Subcribe;