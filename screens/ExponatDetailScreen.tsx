import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, View, Text } from "react-native";
//import Markdown from "react-native-markdown-package";
import HTMLView from "react-native-htmlview";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { db, storage } from "../config";
import { Aller_Std_It, Aller_Std_BdIt } from "../components/StyledText";
import { Exponat } from "../interface";

type Exponaty = { [key: string]: Exponat };

export default class ExponatDetail extends Component<
  NavigationStackScreenProps,
  { item?: Exponat; imageUrl?: string }
> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let itemsRef = db.ref(`/Exponaty/${this.props.navigation.getParam("id")}`);
    itemsRef.on("value", snapshot => {
      let data: Exponat = snapshot.val();
      console.log(data);
      console.log("ID", this.props.navigation.getParam("id"));
      console.log("obrazok", data.obrazok);
      const imgRef = storage.refFromURL(data.obrazok);
      imgRef
        .getDownloadURL()
        .then(url => {
          console.log(url);
          this.setState({ item: data, imageUrl: url });
        })
        .catch(e => {
          this.setState({ item: data });
        });
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.item && (
          <View key={this.state.item.id}>
            {this.state.imageUrl && (
              <Image
                source={{ uri: this.state.imageUrl }}
                style={{ width: 400, height: 250, resizeMode: "stretch" }}
              />
            )}
            <HTMLView value={this.state.item.popis} stylesheet={styles.popis} />
            <HTMLView
              value={this.state.item.ovladanie}
              stylesheet={styles.ovladanie}
            />
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: "#fff"
  },
  popis: {
    fontSize: 50,
    letterSpacing: 2,
    textAlign: "justify",
    color: "#333333",
    //backgroundColor: "red",
    paddingBottom: 15,
    fontFamily: "aller-std-it"
  },
  ovladanie: {
    fontSize: 25,
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
