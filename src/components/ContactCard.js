

import React from 'react'
import contactImg from '../assets/image/logo192.png'


function ContactCard(props) {

    const handleContactDelete=(anyContact)=>{
        // console.log(anyContact);
        props.delete(anyContact)
    }
    return (
        
        <div style={styles.card}>
            <div style={styles.imgCont}>
                <img src={contactImg} style={styles.img} alt='...' />
            </div>
            <div style={styles.details}>
                <h2>Contact Details</h2>
                <p><span>Name : {props.contact.name} </span></p>
                <p><span>Phone : {props.contact.phone}</span></p>
            </div>
            <div>
                <button onClick={()=>handleContactDelete(props.contact.id)} style={{padding:10, backgroundColor:'red', border:0, borderRadius:10}}>Delete</button>
            </div>
        </div>
    )
}
export default ContactCard

const styles = {
    card: {
        marginBottom: "10px",
        border: "1px solid green",
        display:"flex",
        justifyContent:"center",
        flexDirection:"row"
    },
    details: {
        padding:"10px"
    },
    imgCont:{
        width:"30%",
        alignSelf:"center",
        padding:"5px"
    },
    img: {
        width:"100%"
    }

}