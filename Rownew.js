import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop:80,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },

  pic:{
      justifyContent:'center',
      height:250,
      width: 350,
      alignItems:'center',
      borderWidth:1,
      borderRadius:20,
      paddingLeft:10,
      paddingRight:10
    },
});

const Row = (props) => (
  <View style={styles.container}>

    <Text style={styles.text}>
    555555 //ใช้ดาต้าเบส เจสัน
    </Text>
    <View style={styles.pic}>
      <Text style={styles.text}> Picture </Text>
    </View>
  </View>
);

export default Row;
