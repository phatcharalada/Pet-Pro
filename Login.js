import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,TouchableOpacity,View,TextInput} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class project extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.group}>
          <Text style={styles.title}> Your name </Text>
          <TextInput style={styles.input} keyboardType='default' placeholder='Please enter your name'/>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}> Your password </Text>
          <TextInput style={styles.input} keyboardType='default' placeholder='Please enter password'/>
        </View>

        <View style={styles.group}>
            <TouchableOpacity style={styles.button}  onPress={()=>{this.props.navigator.push({index: 4})}}>
          <Text style={styles.buttontext}> submit </Text>
          </TouchableOpacity>
        </View>

      </View>

          );
        }
      }

const styles = StyleSheet.create({

  container:{flex:1,flexDirection:'column',padding:20,justifyContent:'center'},
  input:{padding:10,height:40,borderWidth:1,},
  title:{fontSize:16,},
  group:{marginTop:10,},
  button:{backgroundColor:'darkred',borderWidth:1,alignItems:'center',height:40,justifyContent:'center',},
  buttontext:{fontSize:16,color:'white'},

});

AppRegistry.registerComponent('project', () => project);
