import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, View, Dimensions } from "react-native";
import HTMLView from "react-native-htmlview";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { db, storage } from "../config";
import { Exponat } from "../interface";

var screenWidth = Dimensions.get("window").width;
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
    itemsRef.on("value", (snapshot) => {
      let data: Exponat = snapshot.val();
      const imgRef = storage.refFromURL(data.obrazok);
      imgRef
        .getDownloadURL()
        .then((url) => {
          this.setState({ item: data, imageUrl: url });
        })
        .catch((e) => {
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
                style={{
                  width: screenWidth,
                  height: screenWidth,
                  marginBottom: 20,
                }}
              />
            )}
            <HTMLView
              value={
                this.state.item.popis ? this.state.item.popis : "Žiadne data"
              }
              stylesheet={styles}
            />
            <HTMLView
              value={
                this.state.item.ovladanie
                  ? this.state.item.ovladanie
                  : "Žiadne data"
              }
              stylesheet={styles}
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
    backgroundColor: "#FFFFFF",
    paddingBottom: 50,
  },
  p: {
    fontSize: 20,
    letterSpacing: 0,
    textAlign: "justify",
    color: "#333333",
    marginRight: 25,
    marginLeft: 20,
    marginBottom: 25,
    fontFamily: "aller-std-it",
  },
});
