/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 var Platform = require('react-native').Platform;
var ImagePicker = require('react-native-image-picker');
 import React, { Component } from 'react';
 import {AppRegistry,StyleSheet,Text,TouchableOpacity,Image,View,TextInput,flex,alignItems} from 'react-native';
 import CheckBox from 'react-native-checkbox';




 export default class project extends Component {
   constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
    this.takePhoto = this.takePhoto.bind(this);
    this.chooseImage = this.chooseImage.bind(this);
    this.setImage = this.setImage.bind(this);
  }

setImage(response){
   console.log('Response = ', response);

   if (response.didCancel) {
     console.log('User cancelled image picker');
   }
   else if (response.error) {
     console.log('ImagePicker Error: ', response.error);
   }
   else if (response.customButton) {
     console.log('User tapped custom button: ', response.customButton);
   } else {
     //If it is iOS, remove 'file://' prefix
     let source = {uri: response.uri.replace('file://', ''), isStatic: true};

     //If android, don't need to remove the 'file://'' prefix
     if (Platform.OS === 'android') {
       source = {uri: response.uri, isStatic: true};
     }
     this.setState({image: source});
   }
 }


takePhoto(){
  ImagePicker.launchCamera({noData: true }, this.setImage);
}

chooseImage(){
  ImagePicker.launchImageLibrary({noData: true }, this.setImage);
}

   render() {
     return (
       <View style={styles.container}>
        <View style={styles.head}>
          <Image style={{flex:1,width:250,height:170}} source={this.state.image}/>
        </View>


        <View style={styles.group}>
          <View style={styles.mid}>
            <View style={styles.group}>
              <TouchableOpacity onPress={()=>{this.chooseImage()}} style={styles.button}>
              <Text style={styles.buttontext}> select photo </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.group}>
              <TouchableOpacity onPress={()=>{this.takePhoto()}} style={styles.button}>
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
