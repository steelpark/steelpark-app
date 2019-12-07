import React, { Component } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button
} from "react-native";

import { NavigationStackScreenProps } from "react-navigation-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../config";

let itemsRef = db.ref("/Exponaty");

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
    /*let itemsRef = db.ref(
      "/Exponaty/" + this.props.navigation.getParam("oblast")
    );
    console.log(itemsRef);*/

    itemsRef.on("value", snapshot => {
      let data: Exponaty = snapshot.val();
      let items = [];
      for (const k in data) {
        items.push(data[k]);
      }
      this.setState({ items });
      console.log(items);
    });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.items.map((i: Exponat) => (
          <View key={i.oblast}>
            <Button title={i.nazov} onPress={() => "ExponatDetail"} />
          </View>
        ))}
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </ScrollView>
    );
  }
}

/*ExponatDetail.navigationOptions = {
  title: "Nazov exponatu"
};*/

/*<Text style={styles.vysokaPecText}>
              {this.props.navigation.getParam("popis")}
            </Text>*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#F26602"
  },
  vysokaPec: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 40
  },
  vysokaPecText: {
    fontSize: 20,
    color: "rgba(0,0,0, 100)",
    lineHeight: 24,
    textAlign: "center"
  }
});
