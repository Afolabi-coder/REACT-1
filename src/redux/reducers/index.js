import { combineReducers } from "redux";
import ContactReducer from "./ContactReducer";
import HeaderReducer from "./HeaderReducer";


const RootReducer = combineReducers({
    contact : ContactReducer,
    header : HeaderReducer
})

export default RootReducer;