import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import { db } from "../config";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Aller_Std_BdIt } from "../components/StyledText";
import { Exponat } from "../interface";
type Exponaty = { [key: string]: Exponat };
let itemsRef = db.ref("/Exponaty/");

const buttonImage = {
  biometria: require("../assets/images/oblasti/biometria.png"),
  chémia: require("../assets/images/oblasti/chemia.png"),
  fyzika: require("../assets/images/oblasti/fyzika.png"),
  geografia: require("../assets/images/oblasti/geografia.png"),
  geológia: require("../assets/images/oblasti/geologia.png"),
  hutníctvo: require("../assets/images/oblasti/hutnictvo.png"),
  magnetizmus: require("../assets/images/oblasti/magnetizmus.png"),
  optika: require("../assets/images/oblasti/optika.png"),
  recyklácia: require("../assets/images/oblasti/recyklacia.png"),
  robotika: require("../assets/images/oblasti/robotika.png"),
  strojárstvo: require("../assets/images/oblasti/strojarstvo.png"),
};

const sortBy = (prop: keyof Exponat) => (a: Exponat, b: Exponat) => {
  if (a[prop] < b[prop]) {
    return -1;
  } else if (a[prop] == b[prop]) {
    return 0;
  } else {
    return 1;
  }
};

export default class Oblasti extends Component<NavigationStackScreenProps> {
  state: { items: Exponat[]; sortBy: keyof Exponat } = {
    items: [],
    sortBy: "oblast",
  };
  componentDidMount() {
    itemsRef.on("value", (snapshot) => {
      let data: Exponaty = snapshot.val();
      let items: Exponat[] = [];
      for (const k in data) {
        items.push({ ...data[k], id: k });
      }
      items.sort(sortBy("poschodie"));
      items = getUnique(items, "oblast");
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
        <View style={styles.buttonContainerSort}>
          <View style={styles.buttonSort}>
            <TouchableOpacity
              onPress={() => this.setState({ sortBy: "oblast" })}
            >
              <Text style={styles.textSort}> Zoradiť podľa abecedy </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSort}>
            <TouchableOpacity
              onPress={() => this.setState({ sortBy: "poschodie" })}
            >
              <Text style={styles.textSort}> Zoradiť podľa poschodia </Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.items.sort(sortBy(this.state.sortBy)).map((i: Exponat) => (
          <View key={i.id}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("ExponatListOblasti", {
                  oblast: i.oblast,
                })
              }
            >
              <ImageBackground
                style={styles.imgOblast}
                source={buttonImage[i.oblast]}
              ></ImageBackground>
              <Aller_Std_BdIt style={styles.textOblast}>
                {i.oblast ? i.oblast : "Žiadne data"}
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
  },
  buttonContainerSort: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "auto",
  },
  buttonSort: {
    flex: 1,
    backgroundColor: "#F4F4F5",
    marginBottom: 10,
    marginTop: 10,
    height: 50,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FFFFFF",
    borderBottomWidth: 1,
  },
  textSort: {
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 1,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#288FE1",
  },
  textOblast: {
    fontSize: 25,
    letterSpacing: 2,
    textAlign: "center",
    color: "#333333",
  },
  imgOblast: {
    width: "100%",
    height: 90,
    resizeMode: "stretch",
    alignSelf: "center",
  },
});
