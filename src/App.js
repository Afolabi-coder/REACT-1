import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "./App.css";
import "./index.css"
import ContactList from './components/ContactList'
import Form from './components/Form'


//redux 
import store from './redux/store'
import { Provider } from 'react-redux'


class App extends React.Component{
  state={
    contact :[
      {id:1, name:"Seyi", phone:"0812373492"},
      {id:2, name:"Major", phone: "081234483"},
      {id:3, name:"Josh", phone: "081234483"}
    ]
  }
  addContact = (newContact)=>{
    let anId = this.state.contact.length;
    
    const aNewContact = {
      id: ++anId,
      name: newContact.name,
      phone: newContact.phone
    }
    this.setState((prevState)=>{
      return {
        contact : [...prevState.contact, aNewContact]
      }
    })
  }
  deleteContact = (id)=>{
    const newState = this.state.contact.filter((aContact)=>aContact.id !== id ); 
    return (
      this.setState(prevState=>{
        return{
          contact: newState
        }
      })
    )
  }
  render(){
    return (
      <div className="todo-container">
        <Form addNewContact = {(newContact)=>this.addContact(newContact)}  />
        <ContactList 
          delete={(id)=>this.deleteContact(id)}  
          allContact = {this.state.contact}   
        />
      </div>
    
    )
  }
}
export default ()=>(
  <Provider store={store}>
    <App />
  </Provider>
) 