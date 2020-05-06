import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../config";
import HTMLView from "react-native-htmlview";
import { Aller_Std_BdIt } from "../components/StyledText";
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

      console.log({ item: data });
      console.log(data);
      console.log("id", this.props.navigation.getParam("id"));
      console.log("poschodie", this.props.navigation.getParam("poschodie"));

      console.log(this.state.item.prve);
      console.log(this.state.item.druhe);
      console.log(this.state.item.id);
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>{this.state.item}</Text>
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
  },
  p: {
    fontSize: 20,
    letterSpacing: 0,
    textAlign: "justify",
    color: "#333333",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 15,
    fontFamily: "aller-std-it",
  },
});
