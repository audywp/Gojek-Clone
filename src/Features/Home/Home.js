import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../Shared/Component/Header';
import {LandingPage} from '../LandingPage/action';

import {moderateScale} from 'react-native-size-matters';

// redux
import {connect} from 'react-redux';

function Home(props) {
  return (
    <ScrollView>
      <Header />
    </ScrollView>
  );
}

const mapStateToProps = (state) => {
  return {
    landingPage: state.LandingReducer,
  };
};

const mapDispatchToProps = {
  LandingPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
