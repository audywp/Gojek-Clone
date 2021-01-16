import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../Global/Config/Color';
import {Badge} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

// icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// component
import {Layouting} from '../Global/Style/Layout';
import Ubuntu from './Ubuntu';

// redux
import {connect} from 'react-redux';
// action
import {ActionSetProfile} from '../../Store/action';
import {LandingPage} from '../../Features/LandingPage/action';

function Header(props) {
  const [Medium, setMedium] = useState(40);

  const style = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    HeaderLeft: {
      flex: 1,
    },
    HeaderRight: {
      width: moderateScale(140),
    },
    circle: {
      borderWidth: moderateScale(2),
      borderColor: 'white',
      height: moderateScale(Medium),
      width: moderateScale(Medium),
      borderRadius: Medium / 2,
      backgroundColor: Color.blue,
      marginRight: moderateScale(10),
      elevation: 25,
    },
  });

  useEffect(() => {
    props.ActionSetProfile({name: 'Audy', balance: '200000.00'});
  }, []);

  const RenderLeftComp = () => {
    return (
      <View
        style={[
          style.HeaderLeft,
          Layouting().flexRow,
          Layouting().centerAlign,
        ]}>
        <View style={[style.circle, Layouting().centered]}>
          <Entypo name="wallet" size={moderateScale(22)} color="white" />
        </View>
        <View>
          <View style={[Layouting().flexRow, Layouting().centered]}>
            <Ubuntu
              title={props.GlobalProps.balance}
              size={moderateScale(20)}
              type="Bold"
            />
            <Ubuntu title=" $" size={moderateScale(14)} type="Bold" />
          </View>
          <Ubuntu
            title={`${props.GlobalProps.name} Balance`}
            size={moderateScale(14)}
            type="Bold"
          />
        </View>
      </View>
    );
  };

  const actionGetDataPokedex = () => {
    if (props.LandingReducer.dataPokedex.length > 0) {
      Alert.alert('data sudah di fetch');
    } else {
      props.LandingPage();
    }
  };

  const RenderRightComp = () => {
    return (
      <View
        style={[
          style.HeaderRight,
          Layouting().flexRow,
          Layouting().spaceAround,
        ]}>
        <AntDesign name="search1" size={moderateScale(22)} color="black" />
        <TouchableOpacity onPress={actionGetDataPokedex}>
          <SimpleLineIcons
            name="envelope-letter"
            size={moderateScale(22)}
            color="black"
          />
          <Badge
            value="4"
            status="error"
            containerStyle={{position: 'absolute', top: -6, right: -6}}
          />
        </TouchableOpacity>
        <SimpleLineIcons name="bell" size={moderateScale(22)} color="black" />
      </View>
    );
  };

  console.log(props);
  console.log(props.GlobalProps.name);

  return (
    <>
      <View
        style={[
          style.container,
          Layouting().flexRow,
          Layouting().spaceBetween,
        ]}>
        <RenderLeftComp />
        {RenderRightComp()}
      </View>
      <FastImage
        source={{uri: props.LandingReducer.image}}
        style={{width: moderateScale(200), height: moderateScale(200)}}
        resizeMode="contain"
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  GlobalProps: state.GlobalReducer,
  HomeProps: state.HomeReducer,
  LandingReducer: state.LandingReducer,
});

const mapDispatchToProps = {
  ActionSetProfile,
  LandingPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
