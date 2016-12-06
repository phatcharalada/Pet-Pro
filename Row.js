import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const Row = (props) => (
  <View style={styles.container}>
    <View style={styles.head}>
    <Image  style={{width:30,height:30}} source={require('./iconkon.png')}/>
    </View>
    <Text style={styles.text}>
    Username
    </Text>
  </View>
);

export default Row;
