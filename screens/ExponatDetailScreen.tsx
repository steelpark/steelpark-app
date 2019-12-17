import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, View, Text } from "react-native";

import { NavigationStackScreenProps } from "react-navigation-stack";
import { db } from "../config";
import { Aller_Std_It, Aller_Std_BdIt } from "../components/StyledText";
import { Exponat } from "../interface";

type Exponaty = { [key: string]: Exponat };
let itemsRef = db.ref("/Exponaty");

export default class ExponatDetail extends Component<
  NavigationStackScreenProps
> {
  static navigationOptions: {
    title: string;
  };

  state = {
    items: []
  };

  componentDidMount() {
    itemsRef.on("value", snapshot => {
      let data: Exponaty = snapshot.val();
      let items = [];
      for (const k in data) {
        if (data[k]["nazov"] == this.props.navigation.getParam("nazov")) {
          items.push({ ...data[k], id: k });
        }
      }
      this.setState({ items });
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.items.map((i: Exponat) => (
          <View key={i.id}>
            <Aller_Std_BdIt style={styles.nadpis}>{i.nazov}</Aller_Std_BdIt>
            <Aller_Std_It style={styles.popis}>{i.popis}</Aller_Std_It>
            <Aller_Std_It style={styles.ovladanie}>{i.ovladanie}</Aller_Std_It>
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
  },
  nadpis: {
    fontSize: 25,
    letterSpacing: 3,
    textAlign: "center",
    color: "#333333",
    //backgroundColor: "blue",
    paddingBottom: 10
  },
  popis: {
    fontSize: 18,
    letterSpacing: 2,
    textAlign: "center",
    color: "#333333",
    //backgroundColor: "red",
    paddingBottom: 15
  },
  ovladanie: {
    fontSize: 16,
    letterSpacing: 2,
    textAlign: "center",
    color: "#333333",
    //backgroundColor: "green",
    paddingBottom: 10
  },
  button: {
    marginBottom: 15,
    marginHorizontal: 20,
    backgroundColor: "#FF9800",
    borderRadius: 5,
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  }
});
