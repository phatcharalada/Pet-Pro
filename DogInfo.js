/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class DogInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
<ScrollView>

        <View style={styles.pic}>
          <Text style={styles.title}> Picture </Text>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}> Name </Text>
          <TextInput style={styles.input} keyboardType='default' placeholder='Please enter pet name'/>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}> Sex </Text>
          <TextInput style={styles.input} keyboardType='default' placeholder='Please enter pet sex'/>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}> Specie </Text>
          <TextInput style={styles.input} keyboardType='default' placeholder='Please enter pet specie'/>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}> Date of Birth </Text>
          <TextInput style={styles.input} keyboardType='default' placeholder='Please enter pet birthday'/>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}> Blood Type </Text>
          <TextInput style={styles.input} keyboardType='default' placeholder='Please enter pet blood type'/>
        </View>

        <View style={styles.group}>
          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigator.push({index: 3})}>
          <Text style={styles.buttontext}> Next </Text>
          </TouchableOpacity>
        </View>
</ScrollView>
      </View>

          );
        }
      }

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    padding:20,
    paddingTop:80,
  },
  pic:{
    justifyContent:'center',
    height:250,
    alignItems:'center',
    borderWidth:1,
    borderRadius:20,
    paddingLeft:10,
    paddingRight:10
  },
  input:{
    padding:10,

    height:40,
    borderWidth:1,
  },
  title:{
    fontSize:16,
  },
  group:{
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
  },
  button:{
    justifyContent:'center',
    backgroundColor:'darkred',
    borderWidth:1,
    alignItems:'center',
    height:40,
  },
  buttontext:{
    fontSize:16,
    color:'white',

  }
});
