import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  newUser:null,
  loading:false,
  error: false

}

const RegisterContext = createContext(INITIAL_STATE)

const Regis

export default RegisterContext