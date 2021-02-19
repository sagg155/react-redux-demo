import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {buyCake} from '../redux';

HooksCakeContainer.propTypes = {
    
};

function HooksCakeContainer(props) {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}

export default HooksCakeContainer;