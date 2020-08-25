import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './Actions/actions';

const App = (props) => {

  const removeFeature = feature => {
    // dispatch an action here to remove an item
    // console.log('feautre', feature)
    props.removeFeature(feature);
  };

  const buyItem = feature => {
    // dipsatch an action here to add an item
    // console.log(feature);
    props.addFeature(feature);


  };

  return (

    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  )

};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { addFeature, removeFeature },
)(App);

