const initialState = {
    amount: 0
}

export default (state = initialState, action) => {

    if(action.type === "DEPOSITAR_DINERO"){
        return{
            ...state,
            amount: state.amount + 10
        }
    }
    
    if(action.type === "RETIRAR_DINERO"){
        return{
            ...state,
            amount: state.amount - 10
        }
    }

    if(action.type === "RESET"){
        return {
            ...state,
            amount: state.amount = 0
        }
    }
    return state;
}

//retorna el estado 
export const SelectCurrentAmount = (state) => {
    return state.cajeroReducer.amount;
}