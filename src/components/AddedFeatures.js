import React from 'react';
import {connect} from 'react-redux';
import AddedFeature from './AddedFeature';
/*import {addFeature} from '../actions/ADD_FEATURE';*/


const mapStateToProps = state => {
    return {
        features: state.car.features
    };
};

class AddedFeatures extends React.Component {

    render() {
        return (
            <div className="content">
                <h6>Added features:</h6>
                {this.props.features.length ? (
                    <ol type="1">
                        {this.props.features.map(item => (
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


export default connect(
    mapStateToProps,
    {}
)(AddedFeatures);