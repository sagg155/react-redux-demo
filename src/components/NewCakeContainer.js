import React, { Component } from 'react';
import { buyCake } from '../redux';
import {connect} from 'react-redux';

class NewCakeComponent extends Component {
    state = {
        number:''
    }

    setNumber = (e) => {
        this.setState({
            number: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="number" value={this.state.number} onChange={this.setNumber}/>
                <p>No of Cakes {this.props.numOfCakes}</p>
                <button onClick={() => this.props.buyCake(this.state.number)}>Buy {this.state.number} Cake</button>
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
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeComponent);

