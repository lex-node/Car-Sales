import React from 'react';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return {
        price: state.car.price,
        name: state.car.name,
        image: state.car.image
    };
};

class Header extends React.Component {
    render() {
        return (
            <>
                <figure className="image is-128x128">
                    <img src={this.props.image} alt={this.props.name}/>
                </figure>
                <h2>{this.props.name}</h2>
                <p>Amount: ${this.props.price}</p>
            </>
        );
    }
};


export default connect(
    mapStateToProps,
    {}
)(Header);

