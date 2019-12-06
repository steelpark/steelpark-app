import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//import { ExpoLinksView } from '@expo/samples';

import {db} from "../App"

let itemsRef = db.ref('/prizemie');

export default class LinksScreen extends Component {
  static navigationOptions = {
    title: 'Links',
  }; 

  state = {
    items: []
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
      console.log(items)
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        
      </ScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
