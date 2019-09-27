import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';

class AdditionalFeatures extends React.Component {
    state = {
        store: [
            {id: 1, name: 'V-6 engine', price: 1500},
            {id: 2, name: 'Racing detail package', price: 1500},
            {id: 3, name: 'Premium sound system', price: 500},
            {id: 4, name: 'Rear spoiler', price: 250}
        ]
    }

    render() {
        return (
            <div className="content">
                <h4>Additional Features</h4>
                {this.state.store.length ? (
                    <ol type="1">
                        {this.state.store.map(item => (
                            <AdditionalFeature key={item.id} feature={item}/>
                        ))}
                    </ol>
                ) : (
                    <p>Nice looking car!</p>
                )}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        store: state.store
    }
}


export default connect(
    mapStateToProps,
    {}
)(AdditionalFeature);
