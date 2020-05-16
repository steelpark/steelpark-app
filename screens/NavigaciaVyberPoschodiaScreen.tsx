import React, { Component } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import { db } from "../config";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Aller_Std_BdIt } from "../components/StyledText";
import { Exponat } from "../interface";

type Exponaty = { [key: string]: Exponat };
let itemsRef = db.ref("/Exponaty/");

const buttonColors = {
  prvé: "#FF6900",
  druhé: "#23BF2A",
  prízemie: "#288FE1",
};

export default class LinksScreen extends Component<NavigationStackScreenProps> {
  state = {
    items: [],
  };

  componentDidMount() {
    itemsRef.on("value", (snapshot) => {
      let data: Exponaty = snapshot.val();
      let items = [];
      for (const k in data) {
        items.push({ ...data[k], id: k });
      }
      items = getUnique(items, "poschodie");
      this.setState({ items });
    });

    function getUnique(arr, index) {
      const unique = arr
        .map((e) => e[index])
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & store unique objects
        .filter((e) => arr[e])
        .map((e) => arr[e]);
      return unique;
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.items.map((i: Exponat) => (
          <View key={i.id}>
            <TouchableOpacity
              style={{
                ...styles.buttonPoschodie,
                backgroundColor:
                  buttonColors[i.poschodie] ||
                  styles.buttonPoschodie.backgroundColor,
              }}
              onPress={() =>
                this.props.navigation.navigate("Cesta", {
                  poschodie: i.poschodie,
                  id: this.props.navigation.getParam("id"),
                  nazov: this.props.navigation.getParam("nazov"),
                })
              }
            >
              <Aller_Std_BdIt style={styles.textPoschodie}>
                {i.poschodie}
              </Aller_Std_BdIt>
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
    backgroundColor: "#FFFFFF",
    paddingBottom: 50,
    marginTop: 10,
  },
  textPoschodie: {
    fontSize: 20,
    letterSpacing: 2,
    textAlign: "center",
    color: "#FFFFFF",
  },
  buttonPoschodie: {
    marginBottom: 5,
    marginLeft: "2%",
    marginRight: "2%",
    backgroundColor: "#2196F3",
    borderRadius: 5,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    width: "96%",
  },
});
