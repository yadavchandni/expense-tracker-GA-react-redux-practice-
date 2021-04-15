import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';

//INITIAL STATE 
const initialState={
    transactions:[
        {id:1,text:'car',amount:90},
        {id:2,text:'BMW CAR',amount:300},
        {id:3,text:'Audi A6 CAR',amount:-54},
        {id:4,text:'Lamborghini Aventador CAR',amount:60},
        // {id:5,text:'Paris',amount:80},
        // {id:6,text:'London',amount:600},
        // {id:7,text:'America',amount:610},
        // {id:8,text:'Punjab',amount:160},


    ]
}
// console.log(this.transaction.current.value)

//CREATE CONTEXT
export const GlobalContext=createContext(initialState);

//PROVIDER COMPONENTS:
    export const GlobalProvider=({children})=>{
        const[state,dispatch]=useReducer(AppReducer,initialState);

        // <deleteTransaction/>
        //ACTION 
        function deleteTransaction(id){
            dispatch({
                type:'DELETE_TRANSACTION',
                payload:id
            })
        }
        function addTransaction(transaction){
            dispatch({
                type:'ADD_TRANSACTION',
                payload:transaction
            })
        }
        return (<GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction,
        }}>
            {children}
        </GlobalContext.Provider>);
    }