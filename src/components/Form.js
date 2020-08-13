import React  from 'react'
import { connect } from 'react-redux'

import {addContact} from '../redux/actions/ContactAction'
// import PropTypes from 'prop-types'


class Form extends React.Component {
    state={
        name:"",
        phone: "",
        error:false
    }

    handleInputChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        if(this.state.name === ""){
            this.setState({
                error:{
                    name :"Invalid name supplied"
                }
            })
            return;
        }
        if(this.state.phone === ""){
            this.setState({
                error:{
                    phone:"Invalid phone supplied"
                }
            })
            return;
        }
    
        this.props.addNewContact(this.state)
        this.setState({name:'', phone:''})
    }
    render() {
        console.log(this.state);
        return (
            <div style={styles.formCont}>
                <h2 style={{textAlign:"center", color:"#fff"}}>Add Contact</h2>
                <form>
                    <div style={styles.form}>
                        <label style={styles.label}>Contact Name</label>

                        <input 
                            onChange={(e)=>this.handleInputChange(e)}
                            id='name'
                            style={styles.input} 
                            type='text' 
                            placeholder="Enter a Contact name"
                            value={this.state.name}
                        />
                        <p style={{color:'red'}}> {this.state.error.name}</p>
                    </div>

                    <div style={styles.form}>
                        <label style={styles.label}>Phone Number</label>
                        <input 
                            onChange={(e)=>this.handleInputChange(e)}
                            id="phone"
                            style={styles.input} 
                            type='number' 
                            placeholder='Enter Phone' 
                            value={this.state.phone}
                        />
                        <p style={{color:'red'}}> {this.state.error.phone}</p>
                    </div>

                    {/* <div style={styles.form}>
                        <input type='file' id='multi'  multiple />
                    </div> */}
                    <div>
                        <button 
                            onClick={(e)=>this.handleSubmit(e)}
                            style={{padding:5, color:'blue', borderRadius:10, marginLeft:10}}
                        >
                            Add Contact
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
const styles = {
    form:{
        margin:3,
        padding:5
    },
    label:{
        padding:3,
        color:'yellow'
    },
    input:{
        padding:5,
        borderRadius:20
    },
    formCont:{
        padding:0,
        backgroundColor:"blue"
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addNewContact: (contactDetails)=>dispatch(addContact(contactDetails))
    }
}
export default connect(null, mapDispatchToProps)(Form)