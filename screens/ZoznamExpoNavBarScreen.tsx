import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../config";
import { Aller_Std_BdIt } from "../components/StyledText";
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
        items.push({ ...data[k], id: k });
        //console.log(data[k]["oblast"]);
        //console.log(this.props.navigation.getParam("oblast"));
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
                this.props.navigation.navigate("ExponatDetail", {
                  nazov: i.nazov,
                  id: i.id
                })
              }
            >
              <Aller_Std_BdIt style={styles.text}>{i.nazov}</Aller_Std_BdIt>
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
    fontSize: 24,
    letterSpacing: 2,
    textAlign: "center",
    color: "#333333"
  },
  button: {
    marginBottom: 15,
    marginHorizontal: 20,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  }
});
