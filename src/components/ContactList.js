import React from 'react'
import ContactCard from './ContactCard'
import { connect } from 'react-redux'
import { deleteContact } from '../redux/actions/ContactAction'


class ContactList extends React.Component {
   render(){
        const myContact = this.props.allContact.map(aContact=>(
            <ContactCard delete={(id)=>this.props.deleteContact(id)} key={aContact.id} contact={aContact} />
        ))
        return (
            <div>
               {myContact}
            </div>
        ) 
   }
}
const mapStateToProps = (state)=>{
     
    return{
        allContact:state.contact.contactList,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        deleteContact: (contactDetailsId)=>dispatch(deleteContact(contactDetailsId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(ContactList) 