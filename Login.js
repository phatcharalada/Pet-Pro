import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,TouchableOpacity,Image,View,TextInput} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class project extends Component {
  constructor(props){
    super(props);
    this.state ={
      user:'',
      pass:'',
    }
  }
  render() {
    return (
      <View style={styles.container}>



        <View style={styles.group}>
          <View style={styles.pic}>
          <Image style={{width:200,height:200}} source={require('./doglog.png')}/>
          </View>
          <Text style={styles.title}> Username </Text>
          <TextInput style={styles.input} keyboardType='default' value={this.state.user} onChangeText={(user)=>{this.setState({user})}} placeholder='Please enter your username'/>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}> Password </Text>
          <TextInput style={styles.input} keyboardType='default' value={this.state.pass} onChangeText={(pass)=>{this.setState({pass})}} secureTextEntry={true} placeholder='Please enter password'/>
        </View>

        <View style={styles.group}>
            <TouchableOpacity style={styles.button}  onPress={()=>{
              if(this.state.user!='' && this.state.pass!=''){
              this.props.navigator.push({index: 4})}}}>
          <Text style={styles.buttontext}> Submit </Text>
          </TouchableOpacity>
          <View style={styles.last}>
          <Text style={styles.title}> Forget your password? </Text>
          <TouchableOpacity style={styles.click}>
        <Text style={styles.buttonclick}> CLICK! </Text>
        </TouchableOpacity>
        </View>
        </View>

      </View>

          );
        }
      }

const styles = StyleSheet.create({

  container:{flex:1,flexDirection:'column',padding:20,justifyContent:'center'},
  input:{padding:10,height:40,borderWidth:1,borderRadius:20,},
  title:{fontSize:16,},
  group:{marginTop:10,},
  last:{flexDirection:'row',justifyContent:'center',alignItems:'center'},
  pic:{alignItems:'center'},
  button:{backgroundColor:'darkred',alignItems:'center',borderRadius:20,height:40,justifyContent:'center',},
  buttontext:{fontSize:16,color:'white'},
  click:{backgroundColor:'white',alignItems:'center',height:40,justifyContent:'center',},
  buttonclick:{fontSize:16,color:'black'},


});

AppRegistry.registerComponent('project', () => project);
