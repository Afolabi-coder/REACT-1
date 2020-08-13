let initialState = {
    contactList:[
        {id:1, name:"Seyi", phone:"0812373492"},
        {id:2, name:"Major", phone: "081234483"},
        {id:3, name:"Josh", phone: "081234483"}
    ]
}

const ContactReducer = (state = initialState, action)=>{

    switch (action.type) {
        case 'ADD_CONTACT':
            let newId = state.contactList.length
            const newContact = {id:++newId, name:action.payload.name, phone:action.payload.phone }
            return{
                contactList:[...state.contactList, newContact]
            }
        case 'DELETE_CONTACT':
            const contacts = state.contactList.filter(aContact=>aContact.id !== action.payload)
            return {
                contactList: contacts
            }
        default:
            break;
    }
    
    return state
}

export default ContactReducer;