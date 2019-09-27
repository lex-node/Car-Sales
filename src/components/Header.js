import React from 'react';
import {connect} from 'react-redux';

class Header extends React.Component {
    state = {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    };

    render() {
        return (
            <>
                <figure className="image is-128x128">
                    <img src={this.state.image} alt={this.state.name}/>
                </figure>
                <h2>{this.state.name}</h2>
                <p>Amount: ${this.state.price}</p>
            </>
        );
    }
};

const mapStateToProps = state => {
    return {
        price: state.car.price,
        name: state.car.name,
        image: state.car.image
    };
};


export default connect(
    mapStateToProps,
    {}
)(Header);

