import Row from './Rownew.js'
import React from 'react';
import { AppRegistry,View, ListView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 20,
  },
});

export default class NewFeed extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9', 'row 10']),
    };
  }
  render() {
    return (
      <ListView
        /**style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <View><Text>{data}</Text></View>}**/
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}
