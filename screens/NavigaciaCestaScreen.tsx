import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { db } from "../config";
import HTMLView from "react-native-htmlview";
import { Cesta } from "../interface";

type Cesty = { [key: string]: Cesta };

export default class ExponatDetail extends Component<
  NavigationStackScreenProps,
  { item?: Cesta }
> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let itemsRef = db.ref(
      `/Cesta/${this.props.navigation.getParam(
        "id"
      )}/${this.props.navigation.getParam("poschodie")}`
    );
    itemsRef.on("value", (snapshot) => {
      let data: Cesta = snapshot.val();
      this.setState({ item: data });
      if (data == null) {
        return console.log("prazdne");
      }
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <HTMLView value={this.state.item} stylesheet={styles} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 50,
    paddingRight: 20,
    paddingLeft: 20,
  },
  p: {
    fontSize: 25,
    letterSpacing: 0,
    textAlign: "justify",
    color: "#333333",
    marginRight: 20,
    marginLeft: 20,
    fontFamily: "aller-std-it",
  },
});
