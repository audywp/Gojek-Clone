import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../Global/Config/Color';
import {Badge} from 'react-native-elements';

// icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// component
import {Layouting} from '../Global/Style/Layout';
import Ubuntu from './Ubuntu';

export default function Header() {
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
            <Ubuntu title="2390.00" size={moderateScale(20)} type="Bold" />
            <Ubuntu title=" $" size={moderateScale(14)} type="Bold" />
          </View>
          <Ubuntu title="My Balance" size={moderateScale(14)} type="Bold" />
        </View>
      </View>
    );
  };

  return (
    <View
      style={[style.container, Layouting().flexRow, Layouting().spaceBetween]}>
      <RenderLeftComp />
      <View
        style={[
          style.HeaderRight,
          Layouting().flexRow,
          Layouting().spaceAround,
        ]}>
        <AntDesign name="search1" size={moderateScale(22)} color="black" />
        <TouchableOpacity>
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
    </View>
  );
}
