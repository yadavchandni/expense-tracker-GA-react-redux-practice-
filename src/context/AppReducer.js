export default(state ,action)=>{
  const { type } = action;
 
  switch (type) {
    case "DELETE_TRANSACTION":
    return{
      ...state,
      transactions:state.transactions.filter(transaction => transaction.id !== action.payload)
    }
    case "ADD_TRANSACTION":
    console.log('reducer',action)
      return{
        ...state,
        transactions:[state.transaction,action.payload]
      }
    default:
      return state;
  }
};

 

