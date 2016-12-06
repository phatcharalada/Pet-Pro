import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView

} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class project extends Component {
  render() {
    return (
      <View style={styles.container}>
<ScrollView>
        <View style={styles.pic}>
          <Image style={{flex:1,width:200,height:200}} source={require('./person.png')}/>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}> Username </Text>
          <TextInput style={styles.input} keyboardType='default' placeholder='Please create username'/>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}> Password </Text>
          <TextInput style={styles.input}  keyboardType='default' secureTextEntry={true} placeholder='Please enter password'/>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}> Confirm password </Text>
          <TextInput style={styles.input}  keyboardType='default' secureTextEntry={true} placeholder='Please enter password again'/>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}> E-mail </Text>
          <TextInput style={styles.input} keyboardType='email-address' placeholder='Please enter your e-mail address'/>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}> Phone number </Text>
          <TextInput style={styles.input} keyboardType='numeric' placeholder='Please enter your phone number'/>
        </View>


        <View style={styles.group}>
          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigator.push({index: 1})}>
          <Text style={styles.buttontext}> Finish </Text>
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
    paddingTop:80
  },
  pic:{
    justifyContent:'center',
    height:250,
    alignItems:'center',

    borderRadius:20,
    paddingLeft:10,
    paddingRight:10
  },
  input:{
    padding:10,
    borderRadius:20,
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
    backgroundColor:'darkred',

    alignItems:'center',
    height:40,
    justifyContent:'center',
    borderRadius: 20
  },
  buttontext:{
    fontSize:16,
    color:'white',
  },
  navigationBar:{
    backgroundColor: 'darkred',
  },
});

AppRegistry.registerComponent('project', () => project);
