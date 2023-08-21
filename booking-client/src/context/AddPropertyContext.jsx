import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  newProperty:null,
  loading:false,
  error: null

}

const AddPropertyContext = createContext(INITIAL_STATE)

const AddPropertyrReducer = (state, action) => {
  switch (action.type) {
    case "ADD_START":
      return {
        newProperty: null,
        loading: true,
        error: null,
      };
    case "ADD_SUCCESS":
      return {
       newProperty: action.payload,
       loading: false,
       error: null
      };
    case "ADD_FAILURE":
      return {
        newProperty: null,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }

}

export const AddPropertyContextProvider = ({children}) => {
 const [state, dispatch] = useReducer(AddPropertyrReducer, INITIAL_STATE)

 return(
  <AddPropertyContext.Provider
  value={{
    newProperty: state.newProperty,
    loading: state.loading,
    error: state.error,
    dispatch
  }}
  >
    {children}
  </AddPropertyContext.Provider>
 )

}


export default AddPropertyContext