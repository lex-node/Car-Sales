import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        additionalPrice: state.additionalPrice,
        price: state.car.price
    }
}

class Total extends React.Component {
    render() {
        return (
            <div className="content">
                <h4>Total Amount: ${this.props.price + this.props.additionalPrice}</h4>
            </div>
        );
    }
};


export default connect(
    mapStateToProps,
    {}
)(Total);
