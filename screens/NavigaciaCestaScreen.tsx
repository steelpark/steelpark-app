import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../config";
import { Aller_Std_BdIt } from "../components/StyledText";
import { Exponat } from "../interface";

export default class ExponatDetail extends Component<
  NavigationStackScreenProps
> {
  componentDidMount() {}

  render() {
    console.log("id", this.props.navigation.getParam("id"));
    console.log("poschodie", this.props.navigation.getParam("poschodie"));
    <Text>CAU</Text>;
    return <ScrollView style={styles.container}></ScrollView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    letterSpacing: 2,
    textAlign: "center",
    color: "#333333",
  },
  button: {
    marginBottom: 15,
    marginHorizontal: 20,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
