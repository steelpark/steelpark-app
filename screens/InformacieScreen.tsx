import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Image, Dimensions } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { db } from "../config";
import HTMLView from "react-native-htmlview";
import { Informacia } from "../interface";

type Informacie = { [key: string]: Informacia };
let itemsRef = db.ref("/Informacie");
var screenWidth = Dimensions.get("window").width;

export default class ExponatDetail extends Component<
  NavigationStackScreenProps
> {
  static navigationOptions: {
    title: string;
  };

  state = {
    items: [],
    items2: [],
  };

  componentDidMount() {
    itemsRef.on("value", (snapshot) => {
      let data: Informacia = snapshot.val();
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
        {this.state.items.map((i: Informacia) => (
          <View key={i.id}>
            <HTMLView
              addLineBreaks={false}
              value={i.cennikOtvHod}
              stylesheet={styles}
            />
          </View>
        ))}
        <Image
          style={{
            ...styles.bottomImage,
            width: screenWidth,
          }}
          source={require("../assets/images/mapa.png")}
        ></Image>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  p: {
    fontSize: 15,
    letterSpacing: 2,
    textAlign: "left",
    color: "#333333",
    margin: -4,
    padding: -4,
    paddingLeft: 18,
    fontFamily: "aller-std-it",
  },
  p2: {
    fontSize: 10,
    letterSpacing: 2,
    textAlign: "left",
    color: "#333333",
    margin: -4,
    padding: -4,
    paddingLeft: 18,
    fontStyle: "italic",
    fontFamily: "aller-std-it",
  },
  h2: {
    fontSize: 25,
    letterSpacing: 2,
    textAlign: "center",
    color: "#333333",
    fontWeight: "bold",
    fontFamily: "aller-std-it",
  },
  h3: {
    fontSize: 20,
    letterSpacing: 2,
    textAlign: "center",
    color: "#333333",
    fontWeight: "bold",
    fontFamily: "aller-std-it",
  },
  bottomImage: {
    height: 300,
    resizeMode: "contain",
    marginTop: 20,
    marginBottom: 25,
  },
});
