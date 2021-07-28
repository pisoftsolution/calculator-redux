import { INCREMENT, DECREMENT, MULTIPLICATION, DIVISION } from "./counter.types";

const INITIAL_STATE ={
    count : 0,
}

const reducer =(state = INITIAL_STATE, action) =>{
    switch(action.type){
        case INCREMENT :
            console.log(action.payload);
            return{
                ...state, count:Number( action.payload.input1) + Number( action.payload.input2),
            };
        case DECREMENT :
            console.log(action.payload);
            return{
                ...state, count: Number(action.payload.input1) - Number( action.payload.input2),
            }
            case MULTIPLICATION :
                console.log(action.payload);
                return{
                    ...state, count: Number(action.payload.input1) * Number( action.payload.input2),
                }
                case DIVISION :
                console.log(action.payload);
                return{
                    ...state, count:  Number(action.payload.input1) / Number( action.payload.input2),
                }
            default :
            return state;
    }
}
export default reducer;