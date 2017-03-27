import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';


export default class BottomBarItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    numOfTab: PropTypes.string.isRequired,
    handleTap: PropTypes.func,
  }


  render() {
  const { title, handleTap } = this.props;
  const imageTab1 = icons[this.props.numOfTab];
  return (
     <View>
      <Image  style={styles.image}
              source={imageTab1}
              resizeMode="center"/>
      <Text style={styles.title}>{title}</Text>
     </View>
  );
  }
  }

  const icons = {
    item1: require('../bookmark50.png'),
  }

  const styles = StyleSheet.create({
   title:{
     flex:1,
     justifyContent: 'center',
     textAlign: 'center',
     fontSize: 15,
   },
   image:{
     flex:1,
     justifyContent: 'flex-start',
     margin: 5,
   },
  });
