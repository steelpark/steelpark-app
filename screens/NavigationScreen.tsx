import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db } from "../config";
import { Aller_Std_BdIt } from "../components/StyledText";
import { Exponat } from "../interface";
type Exponaty = { [key: string]: Exponat };
let itemsRef = db.ref("/Exponaty");

const buttonColors = {
  biometria: "#F78DA7",
  chémia: "#D6A805",
  fyzika: "#DB2E2E",
  geografia: "#007302",
  geológia: "#1C1C1C",
  hutníctvo: "#FF9800",
  magnetizmus: "#0D5FB1",
  optika: "#2196F3",
  recyklácia: "#689F38",
  robotika: "#795548",
  strojárstvo: "#607D8B",
};

const textColors = {
  biometria: "#2F2F2F",
  chémia: "#2F2F2F",
  fyzika: "#2F2F2F",
  geografia: "#2F2F2F",
  geológia: "#C9D0D6",
  hutníctvo: "#2F2F2F",
  magnetizmus: "#C9D0D6",
  optika: "#2F2F2F",
  recyklácia: "#2F2F2F",
  robotika: "#2F2F2F",
  strojárstvo: "#2F2F2F",
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

export default class ExponatDetail extends Component<
  NavigationStackScreenProps
> {
  static navigationOptions: {
    title: string;
  };
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
      items.sort(sortBy("oblast"));
      this.setState({ items });
    });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.buttonContainerSort}>
          <View style={styles.buttonSort}>
            <TouchableOpacity
              onPress={() => this.setState({ sortBy: "nazov" })}
            >
              <Text style={styles.textSort}>Zoradiť podľa abecedy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSort}>
            <TouchableOpacity
              onPress={() => this.setState({ sortBy: "oblast" })}
            >
              <Text style={styles.textSort}>Zoradiť podľa oblasti </Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.items.sort(sortBy(this.state.sortBy)).map((i: Exponat) => (
          <View key={i.id}>
            <TouchableOpacity
              style={{
                ...styles.buttonExponat,
                backgroundColor:
                  buttonColors[i.oblast] ||
                  styles.buttonExponat.backgroundColor,
              }}
              onPress={() =>
                this.props.navigation.navigate("VyberPoschodia", {
                  nazov: i.nazov,
                  id: i.id,
                })
              }
            >
              <Aller_Std_BdIt
                style={{
                  ...styles.textExponat,
                  color: textColors[i.oblast] || styles.textExponat.color,
                }}
              >
                {i.nazov ? i.nazov : "Žiadne data"}
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  textExponat: {
    fontSize: 23,
    letterSpacing: 2,
    textAlign: "center",
    color: "#C9D0D6",
  },
  textSort: {
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 1,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#288FE1",
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
  buttonExponat: {
    marginBottom: 8,
    marginLeft: "2%",
    marginRight: "2%",
    backgroundColor: "#2196F3",
    borderRadius: 5,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    width: "96%",
  },
});
