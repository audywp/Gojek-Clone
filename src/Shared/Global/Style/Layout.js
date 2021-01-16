import {StyleSheet} from 'react-native';

export const Layouting = (type) => {
  return StyleSheet.create({
    flexRow: {
      flexDirection: 'row',
    },
    centered: {
      justifyContent: 'center',
      alignItems: type ? type : 'center',
    },
    spaceBetween: {
      justifyContent: 'space-between',
      alignItems: type ? type : 'center',
    },
    spaceAround: {
      justifyContent: 'space-around',
      alignItems: type ? type : 'center',
    },
    spaceEvenly: {
      justifyContent: 'space-evenly',
      alignItems: type ? type : 'center',
    },
    centerAlign: {
      alignItems: 'center',
    },
  });
};
