/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';
 import {AppRegistry,StyleSheet,Text,TouchableOpacity,Image,View,TextInput,flex,alignItems} from 'react-native';
 import CheckBox from 'react-native-checkbox';
 import * as firebase from 'firebase';
 // Initialize Firebase

 var config = {
   apiKey: "AIzaSyDRybHsuh216_7FBWxq7ct_uuhaCvubZA4",
   authDomain: "project-cd9fe.firebaseapp.com",
   databaseURL: "https://project-cd9fe.firebaseio.com",
   storageBucket: "project-cd9fe.appspot.com",
   messagingSenderId: "1037253471787"
 };
 firebase.initializeApp(config);

 export default class project extends Component {
   render() {
     return (
       <View style={styles.container}>
        <View style={styles.head}>
          <Image style={{flex:1,width:250,height:170}} source={require('./photoplus.png')}/>
        </View>


        <View style={styles.group}>
          <View style={styles.mid}>
            <View style={styles.group}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}> select photo </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.group}>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}> take photo </Text>
              </TouchableOpacity>
            </View>
          </View>

         <View style={styles.group}>
           <Text style={styles.title}> </Text>
           <TextInput style={styles.input} multiline={true} keyboardType='default' placeholder='Write your capture!'/>
         </View>



         <View style={styles.group}>
           <TouchableOpacity style={styles.button}>
           <Text style={styles.buttontext}> post </Text>
           </TouchableOpacity>
         </View>

        </View>
       </View>

           );
         }
       }

 const styles = StyleSheet.create({

   container:{flex:1,flexDirection:'column',padding:20,},
   input:{padding:10,height:80,borderWidth:1,borderRadius:20,},
   title:{fontSize:16,},
   group:{flex:1},
   head:{
     alignItems:'center',
     flex:1,
   },
   button:{backgroundColor:'darkred',alignItems:'center',height:40,justifyContent:'center',borderRadius:20,},
   buttontext:{fontSize:16,color:'white',},
   image:{padding:10,height:250,borderWidth:1,},
   mid:{flexDirection:'row',}

 });
AppRegistry.registerComponent('project', () => project);
