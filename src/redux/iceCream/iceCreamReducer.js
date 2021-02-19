import {BUY_ICECREAM} from './iceCreamTypes';

const initialState = {
    numOfIceCreams: 20
}

export default  (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state;
    }
}