import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { db, storage } from "../config";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Aller_Std_It, Aller_Std_BdIt } from "../components/StyledText";
import { Exponat } from "../interface";

type Exponaty = { [key: string]: Exponat };
let itemsRef = db.ref("/Exponaty/");

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
        //console.log(data[k]["poschodie"]);
      }
      items = getUnique(items, "poschodie");
      this.setState({ items });
      //console.log(items);
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
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("Cesta", {
                  poschodie: i.poschodie,
                  id: i.id,
                })
              }
            >
              <Aller_Std_BdIt style={styles.text}>{i.poschodie}</Aller_Std_BdIt>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  }
}

/*<Image
                style={styles.img}
                source={require("../assets/images/oblasti/hutnictvo.png")}
              />*/

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    letterSpacing: 2,
    textAlign: "center",
    color: "#333333",
  },
  button: {
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#FF9F00",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 400,
    height: 65,
    resizeMode: "stretch",
  },
});
