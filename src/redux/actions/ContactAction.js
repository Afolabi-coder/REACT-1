import  {ADD_CONTACT, DELETE_CONTACT}  from "./types";

//actions as an object
// const addContact = ({
//     type: ADD_CONTACT,
//     payload : contactDetails
// });

//actions as an action creator

export const addContact = (contactDetails)=>{
    return (dispatch)=>{
        dispatch({
            type: ADD_CONTACT,
            payload: contactDetails
        })
    }
}
export const deleteContact = (contactDetailsId)=>{
    return (dispatch)=>{
        dispatch({
            type: DELETE_CONTACT,
            payload: contactDetailsId
        })
    }
}

