

import Footer from './Loadmore';

/*
 * Removed for brevity
 */

class project extends React.Component {
  /*
   * Removed for brevity
   */
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <Header />}
        renderFooter={() => <Footer />}
      />
    );
  }
}

export default ListViewDemo;
AppRegistry.registerComponent('project', () => project);
