import {  createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from './AppReducer'

const inicialState = {
    transaction: []
}
export const Context = createContext();


//Custom Hooks para traer el contexto
export const useGlobalState = () =>{
    const context = useContext(Context);
    return context;
} 

//Funcion que retorna un componente provider
export const  GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer( AppReducer,inicialState,
        () => {
            const localData = localStorage.getItem('transactions');
            return localData ? JSON.parse(localData) : inicialState;
        });

    //useEffect para controlar el estado incial
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state));
    }, [state]);


//Añadir una transaccion
    const addTransaction = (transaction) =>{
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    };

 //Borrar una transaccion
    const deleteTransaction = (id) =>{
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    };


    return(
        <Context.Provider value={{ transaction: state.transaction,
        addTransaction,
        deleteTransaction}}>
            { children }
        </Context.Provider>
    );
}