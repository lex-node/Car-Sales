import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';
import {addFeature} from "../actions/actions";
/*import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";*/


const mapStateToProps = state => ({
    store: state.store
})

class AdditionalFeatures extends React.Component {
    render() {
        return (
            <div className="content">
                <h4>Additional Features</h4>
                {this.props.store.length ? (
                    <ol type="1">
                        {this.props.store.map(item => (
                            <AdditionalFeature key={item.id} feature={item}
                                               onClick={() => this.props.addFeature(item)}/>
                        ))}
                    </ol>
                ) : (
                    <p>Nice looking car!</p>
                )}
            </div>
        );
    }
};


export default connect(
    mapStateToProps,
    {addFeature}
)(AdditionalFeatures);
