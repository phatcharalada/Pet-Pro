
import React,{Component} from 'react';
import {
  Text,
  AppRegistry,
  StyleSheet,
} from 'react-native';
import NewFeed from './NewFeed.js';
import View from './View.js';
import Post from './Post.js';
import Profile from './Profile.js';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default  class Scrollable extends Component {
  render() {
    return(<ScrollableTabView
      style= {{marginTop:70}}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
    >
    <NewFeed tabLabel='New Feed'/>
    <View tabLabel='Search'/>
    <Post tabLabel='Post'/>
    <Profile tabLabel='Profile' callback={this.props.navigator}/>

    </ScrollableTabView>
);
    }

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',


  },
  headerText:{
    fontSize:20,
    fontWeight: 'bold',
    color:'white',

  },
  header:{
    backgroundColor:'darkred',
    justifyContent:'center',
    alignItems:'center',
    height:80,
  },
});

//AppRegistry.registerComponent('project', () => project);
