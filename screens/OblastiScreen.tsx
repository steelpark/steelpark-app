import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from "react-native";

import { db, storage } from "../config";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Aller_Std_It, Aller_Std_BdIt } from "../components/StyledText";
import { Exponat } from "../interface";

type Exponaty = { [key: string]: Exponat };
let itemsRef = db.ref("/Exponaty/");

export default class LinksScreen extends Component<NavigationStackScreenProps> {
  state = {
    items: []
  };

  componentDidMount() {
    itemsRef.on("value", snapshot => {
      let data: Exponaty = snapshot.val();
      let items = [];
      for (const k in data) {
        items.push({ ...data[k], id: k });
        console.log(data[k]["oblast"]);
      }
      this.setState({ items });
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.items.map((i: Exponat) => (
          <View key={i.id}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("ExponatList", {
                  oblast: i.oblast
                })
              }
            >
              <Image source={require} />
              <Aller_Std_BdIt style={styles.text}>{i.oblast}</Aller_Std_BdIt>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 20,
    letterSpacing: 2,
    textAlign: "center",
    color: "#333333"
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
