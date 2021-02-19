import React, { Component } from 'react';
import { buyIceCream } from '../redux';
import {connect} from 'react-redux';

class IceCreamComponent extends Component {
    render() {
        return (
            <div>
                <p>No of IceCreams {this.props.numOfIceCreams}</p>
                <button onClick={this.props.buyIceCream}>Buy IceCream</button>
            </div>
        );
    }
}   

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamComponent);
