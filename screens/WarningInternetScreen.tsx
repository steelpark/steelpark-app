import React, { Component } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
} from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { Aller_Std_BdIt } from "../components/StyledText";

var screenWidth = Dimensions.get("window").width;

export default class WarningIternet extends Component<
  NavigationStackScreenProps
> {
  static navigationOptions: {
    title: string;
  };
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <StatusBar animated={true} hidden={true}></StatusBar>
        <View style={styles.getStartedContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require("../assets/warningwifi.png")}
              style={{
                ...styles.obrazokLogo,
                width: screenWidth,
                height: 500,
              }}
            />
            <Aller_Std_BdIt style={styles.textInformacie}>
              Žiaden prístup k internetu
            </Aller_Std_BdIt>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    width: "auto",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  obrazokLogo: {
    //width: 450,
    //height: 200,
    resizeMode: "contain",
    //marginTop: 3,
    //marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  textInformacie: {
    fontSize: 25,
    letterSpacing: 2,
    textAlign: "center",
    color: "#288FE1",
  },
});
