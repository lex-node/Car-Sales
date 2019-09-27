import React from 'react';
import {connect} from 'react-redux';
import AddedFeature from './AddedFeature';
/*import {addFeature} from '../actions/ADD_FEATURE';*/

class AddedFeatures extends React.Component {
    state = {
        features: []
    };

    render() {
        return (
            <div className="content">
                <h6>Added features:</h6>
                {this.state.features.length ? (
                    <ol type="1">
                        {this.state.features.map(item => (
                            <AddedFeature key={item.id} feature={item}/>
                        ))}
                    </ol>
                ) : (
                    <p>You can purchase items from the store.</p>
                )}
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        features: state.car.features
    };
};


export default connect(
    mapStateToProps,
    {}
)(AddedFeatures);