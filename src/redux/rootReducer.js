import {combineReducers} from 'redux';
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import userReducer from './user/UserReducer';

export default combineReducers({
   cake: cakeReducer,
   iceCream: iceCreamReducer,
   user: userReducer 
});