import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Image,
  flexDirection,
  justifyContent,
  marginLeft,



} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class profile extends Component {
  render() {
    return (
      <View style={styles.container}>
<ScrollView>
        <View style={styles.first}>
        <Text style={styles.titlehead}> Username </Text>
        <TouchableOpacity style={styles.buttonboxlog} onPress={()=>{this.props.callback.resetTo({index:0})}}>
        <Text style={styles.buttontextlog}> Log out</Text>
         </TouchableOpacity>
         </View>
        <View style={styles.header}>

          <View style={styles.pic}>
            <Image style={{flex:1,width:100,height:100}} source={require('./prof.png')}/>
          </View>

          <View style={styles.box}>

            <View style={styles.info}>
              <Text style={styles.title}>  POST  </Text>
              <Text style={styles.title}> FOLLOWING </Text>
              <Text style={styles.title}> FOLLOWER </Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.title}> 03 </Text>
              <Text style={styles.title}> 00 </Text>
              <Text style={styles.title}> 00 </Text>
            </View>
            <TouchableOpacity style={styles.buttonbox}>
            <Text style={styles.buttontext}> Edit Profile </Text>
             </TouchableOpacity>


        </View>

        </View>

        <View style={styles.group}>

          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}> Information </Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button}>
           <Text style={styles.buttontext}> Vaccine</Text>
            </TouchableOpacity>

        </View>
      <View style={styles.body}>

        <View style={styles.pic}>
          <Image style={{flex:1,width:100,height:100}} source={require('./pic01.png')}/>
        </View>
        <View style={styles.pic}>
          <Image style={{flex:1,width:100,height:100}} source={require('./pic02.png')}/>
        </View>
        <View style={styles.pic}>
          <Image style={{flex:1,width:100,height:100}} source={require('./pic03.jpg')}/>
        </View>
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
    padding:10,
    //paddingTop:80
  },
  first:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  header:{
    justifyContent:'flex-start',
    height:110,

    paddingLeft:10,
    paddingRight:10,
    flexDirection:'row',
  },
  body:{
    justifyContent:'space-around',
    height:110,
    padding:10,

    flexDirection:'row',
  },
  pic:{
    height:100,
    width:100,
    paddingTop:10,
  },
  box:{
    flexDirection:'column',
    height:100,
    paddingLeft:20,
  },
  info:{
    flexDirection:'row',
    paddingLeft:10,
    paddingTop:10,
    justifyContent:'space-around',

  },
  input:{
    padding:10,

    height:40,
    borderWidth:1,
  },
  title:{
    fontSize:12,
  },
  titlehead:{
    fontSize:20,
  },
  group:{
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    flexDirection:'row',
    justifyContent:'center',
    justifyContent:'space-around',
  },
  button:{
    backgroundColor:'darkred',
    borderRadius:20,
    alignItems:'center',
    height:40,
    justifyContent:'center',
    padding: 10,
  },
  buttonbox:{
    backgroundColor:'gray',
    borderRadius:20,
    alignItems:'center',
    height:30,
    justifyContent:'center',
    padding:10,
    marginTop:10,

  },
  buttonboxlog:{
    backgroundColor:'gray',
    borderRadius:20,
    alignItems:'center',
    height:20,
    justifyContent:'center',
    marginTop:10,
    padding:5

  },
  buttontext:{
    fontSize:16,
    color:'white',
  },
  buttontextlog:{
    fontSize:10,
    color:'white',
  },
  navigationBar:{
    backgroundColor: 'darkred',
  },
});

AppRegistry.registerComponent('project', () => project);
