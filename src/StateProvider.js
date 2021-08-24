// setup data layer
// we need this to track this basket

import { createContext, useContext, useReducer } from "react";

// created empty data layer
export const StateContext = createContext();

// provider
// wrap the app in this provider and give access to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={ useReducer ( reducer, initialState ) }  >
        { children }
    </StateContext.Provider>
)

// this is how we use it inside a component
export const useStateValue = () => useContext(StateContext);