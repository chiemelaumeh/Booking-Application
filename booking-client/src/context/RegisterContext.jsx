import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  newUser:null,
  loading:false,
  error: null

}

const RegisterContext = createContext(INITIAL_STATE)

const RegisterReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_START":
      return {
        newUser: null,
        loading: true,
        error: null,
      };
    case "REGISTER_SUCCESS":
      return {
       newUser: action.payload,
       loading: false,
       error: null
      };
    case "REGISTER_FAILURE":
      return {
        newUser: null,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }

}

export const RegisterContextProvider = ({children}) => {
 const [state, dispatch] = useReducer(RegisterReducer, INITIAL_STATE)

 return(
  <RegisterContext.Provider
  value={{
    newUser: state.newUser,
    loading: state.loading,
    error: state.error,
    dispatch
  }}
  >
    {children}
  </RegisterContext.Provider>
 )

}


export default RegisterContext