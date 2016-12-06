import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'flex-start',
    //paddingTop:80,
  },
  text: {
    fontSize: 14,
  },
  pic:{
      justifyContent:'center',
      height:250,
      width: 350,
      alignItems:'center',
      //borderWidth:1,
      //borderRadius:20,
      paddingLeft:10,
      paddingRight:10
    },
    group:{
      flexDirection:'row',
      height:50,
    },
    head:{
      padding:10,

      justifyContent:'center',
    },
});

const Row = (props) => (
  <View style={styles.container}>

  <View style={styles.group}>
      <View style={styles.head}>
        <Image  style={{width:30,height:30}} source={require('./iconkon.png')}/>
        </View>
        <View style={styles.head}>
        <Text style={styles.text}> Username </Text>
        </View>
  </View>

    <View style={styles.pic}>
      <Image  style={{width:350,height:250}} source={require('./show.jpg')}/>
    </View>
    <Text style={styles.text}> Username #caption </Text>


  </View>
);

export default Row;
