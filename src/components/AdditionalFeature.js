import React from 'react';
import { connect } from 'react-redux';
import { AddItem } from '../Action/action';
const AdditionalFeature = props => {

  const ClickHandler = (e) => {
    props.AddItem(props.feature.id)
  }



  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={ClickHandler}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};




const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
}

export default connect(
  mapStateToProps,
  { AddItem }
)(AdditionalFeature);
