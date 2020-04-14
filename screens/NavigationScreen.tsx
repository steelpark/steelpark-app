import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { CheckBox } from "react-native-check-box";
import { db, storage } from "../config";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Aller_Std_It, Aller_Std_BdIt } from "../components/StyledText";
import { Exponat } from "../interface";

type Exponaty = { [key: string]: Exponat };
let itemsRef = db.ref("/Exponaty/");
//type isChecked = boolean;

export default class LinksScreen extends Component<NavigationStackScreenProps> {
  state = {
    items: [],
    isChecked: true
  };

  componentDidMount() {
    itemsRef.on("value", snapshot => {
      let data: Exponaty = snapshot.val();
      let items = [];

      for (const k in data) {
        items.push({ ...data[k], id: k });
        //console.log(data[k]["oblast"]);
      }
      items = getUnique(items, "oblast");

      this.setState({ items });
      //console.log(items);
    });

    function getUnique(arr, index) {
      const unique = arr
        .map(e => e[index])
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e])
        .map(e => arr[e]);
      return unique;
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.items.map((i: Exponat) => (
          <View key={i.id}>
            <CheckBox
              //style={styles.button}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked
                });
              }}
              isChecked={this.state.isChecked}
              lefttext={"auto"}
            ></CheckBox>
            <Aller_Std_BdIt style={styles.text}>{i.oblast}</Aller_Std_BdIt>
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
    marginBottom: 35,
    marginHorizontal: 20,
    //backgroundColor: "#FF9800",
    borderRadius: 5,
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: 400,
    height: 100
  }
});
