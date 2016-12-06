/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import a from './index.js'


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Navigator,
  Image,
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>


      <ScrollView>

        <View style={styles.head}>
          <Text style={styles.headname}>
          Welcome to Pet Pro
          </Text>
          </View>

          <View style={styles.head}>
          <Text style={styles.appname}>
           สัตว์เลี้ยงเป็นสิ่งเดียวในโลกที่รักคุณได้มากกว่าที่คุณรักตัวเอง Josh Billings นักเขียนชาวอเมริกัน
          </Text>
          </View>

          <View style={styles.footer}>
          <Image style={{flex:1,width:320,height:320}}source={require('./maindog.png')}/>
          </View>


              <TouchableOpacity style={styles.group}  onPress={()=>this.props.navigator.push({index: 1})}>
                <Text style={styles.buttontext}>Login</Text>
                </TouchableOpacity>


              <TouchableOpacity style={styles.group} onPress={()=>this.props.navigator.push({index: 2})}>
                <Text style={styles.buttontext}>Sign up</Text>
                </TouchableOpacity>

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
  paddingTop:70,
},
head:{
  justifyContent:'center',
  height:50,
  alignItems:'center',
  marginTop:20,
  paddingLeft:10,
  paddingRight:10
},
  appname: {
    fontSize: 12,
    textAlign:'center',
  },
  headname:{
    fontSize:30
  },

  group:{
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    height:40,
    borderRadius:20,
    backgroundColor:'darkred',
    justifyContent:'center',
    alignItems:'center',
  },
  buttontext:{
    fontSize:16,
    color:'white',
  },
  footer:{
    height:320,
    justifyContent:'center',
    alignItems:'center',
  }

});
