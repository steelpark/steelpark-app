import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
//import { ExpoLinksView } from '@expo/samples';

import { db } from "../config";
import { NavigationStackScreenProps } from "react-navigation-stack";

let itemsRef = db.ref("/prizemie/");

interface Exponat {
  id: string;
  nazov: string;
  popis: string;
  oblast: string;
  poschodie: string;
  ovladanie: string;
  obrazok: string;
}
type Exponaty = { [key: string]: Exponat };

export default class LinksScreen extends Component<NavigationStackScreenProps> {
  static navigationOptions = {
    title: "Links"
  };

  state = {
    items: []
  };

  componentDidMount() {
    itemsRef.on("value", snapshot => {
      let data: Exponaty = snapshot.val();
      let items = [];
      for (const k in data) {
        items.push({ ...data[k], id: k });
      }
      this.setState({ items });
      console.log(items);
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.items.map((i: Exponat) => (
          <View key={i.id}>
            <Text>{i.nazov}</Text>
            <Text>{i.id}</Text>
            <Button
              title="Skuska"
              onPress={() =>
                this.props.navigation.navigate("Skuska", { id: i.id })
              }
            />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
