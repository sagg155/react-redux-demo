import React, { Component } from 'react';
import { buyCake } from '../redux';
import {connect} from 'react-redux';

class CakeComponent extends Component {
    render() {
        return (
            <div>
                <p>No of Cakes {this.props.numOfCakes}</p>
                <button onClick={this.props.buyCake}>Buy Cake</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);

