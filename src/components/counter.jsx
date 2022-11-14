import { depositar, retirar , reset} from "../actions/cajero";
import { connect } from "react-redux";
import { SelectCurrentAmount } from "../reducers/cajero";


const Counter = ({depositar, retirar, reset, amount}) => {
    return(
        <>
            <h1>{amount}</h1>
            <button onClick={()=>depositar()}>depositar 10</button>
            <button onClick={()=>retirar()}>retirar 10</button>
            <button onClick={()=>reset()}>reset</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        //nos devuelve el estado 
        amount: SelectCurrentAmount(state)
    }
}
//primer parametro es algo que quiero recuperar del store
//segundo par es lo que quiero enviar al store
export default connect(mapStateToProps, {depositar, retirar, reset})(Counter)//componente que va a estar conectado con el store