/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, {Component} from 'react';
 import {Navigator, StatusBar, TouchableHighlight,
    AppRegistry, StyleSheet, Text, View} from 'react-native';
 import DogInfo from './DogInfo.js'
 import OwnerInfo from './OwnerInfo.js'
 import Main from './Main.js'
 import Login from './Login.js'
 import NewFeed from './NewFeed.js'
 //import View from './View.js'
const routes = [
  {
    title: 'PET SOCIETY',
    index: 0
  }, {
    title: 'Log in',
    index: 1
  }, {
    title: 'Dog Information',
    index: 2
  }, {
    title: 'Owner Information',
    index: 3
  }, {
    title: '...',
    index: 4
  },
];

class project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="darkred"
          barStyle="light-content"
        />
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={
            (route, navigator) => {
              switch (route.index) {
                case 0: return (<Main navigator={navigator} route={routes[route.index]}></Main>);
                case 1: return (<Login navigator={navigator} route={routes[route.index]}></Login>);
                case 2: return (<DogInfo navigator={navigator} route={routes[route.index]}></DogInfo>);
                case 3: return (<OwnerInfo navigator={navigator} route={routes[route.index]}></OwnerInfo>);
                case 4: return (<NewFeed navigator={navigator} route={routes[route.index]}></NewFeed>);
                //case 5: return (<View navigator={navigator} route={routes[route.index]}></View>);
              }
            }
          }
          configureScene={
            (route, routeStack) =>
              Navigator.SceneConfigs.FloatFromBottom
          }
          navigationBar={

           <Navigator.NavigationBar
             routeMapper={{
               LeftButton: (route, navigator, index, navState) => {
                 if (route.index == 0){
                   return null;
                 }
                 return (
                   <TouchableHighlight onPress={()=>navigator.pop()}>
                     <Text style={styles.navigationBarText}>Back</Text>
                   </TouchableHighlight>
                 )
               },
               RightButton: (route, navigator, index, navState) => { return null; },
               Title: (route, navigator, index, navState) =>
                 { return (<Text style={[styles.navigationBarText, styles.titleText]}>{routes[route.index].title}</Text>); },
             }}
             style={styles.navigationBar}
           />


        }
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigationBar:{
    backgroundColor: 'darkred',
  },
  navigationBarText:{
    color: 'white',
    padding: 10,
    fontSize: 15
  },
  titleText:{
    fontSize: 20,
    paddingTop:5
  }

});

AppRegistry.registerComponent('project', () => project);
