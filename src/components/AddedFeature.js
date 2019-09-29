import React from 'react';

const AddedFeature = props => {
  return (
    <li>
        <button onClick={props.onClick} className="button">Remove</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
