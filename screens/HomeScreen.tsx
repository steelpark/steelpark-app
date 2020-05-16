import React, { Component } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
} from "react-native";
import { Aller_Std_It, Aller_Std_BdIt } from "../components/StyledText";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { TouchableOpacity } from "react-native-gesture-handler";

var screenWidth = Dimensions.get("window").width;

export default class HomeScreen extends Component<NavigationStackScreenProps> {
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
              source={require("../assets/images/logo.png")}
              style={styles.obrazokLogo}
            />
          </View>
          <View>
            <Aller_Std_BdIt style={styles.nadpisText}>
              VITAJTE !{" "}
            </Aller_Std_BdIt>
          </View>

          <View>
            <Aller_Std_It style={styles.uvodText}>
              Sme parkom vedy a zábavy. Prinášame malým i veľkým zážitok zo
              spoznávania. Chceme, aby deti a mládež pri skúmaní vedeckých
              hypotéz a overovaní technických a prírodných zákonitostí
              napredovali, aby sa nenudili, ale zabávali.
            </Aller_Std_It>
          </View>

          <View style={styles.obrazokSpodok}>
            <Image
              source={require("../assets/homescreenbottom.png")}
              style={{
                ...styles.bottomImage,
                width: screenWidth,
              }}
            />
          </View>

          <View style={styles.informacieContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Informacie", {})}
            >
              <Aller_Std_BdIt style={styles.textInformacie}>
                Informácie
              </Aller_Std_BdIt>
            </TouchableOpacity>
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
  obrazokSpodok: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  obrazokLogo: {
    width: 450,
    height: 200,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  informacieContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonInformacie: {
    marginBottom: 8,
    marginLeft: "2%",
    marginRight: "2%",
    color: "#2196F3",
    borderRadius: 5,
    height: 60,
    alignSelf: "center",
    width: "96%",
  },
  textInformacie: {
    fontSize: 20,
    letterSpacing: 2,
    textAlign: "center",
    color: "#C9D0D6",
  },
  bottomImage: {
    height: 300,
    resizeMode: "contain",
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  uvodText: {
    fontSize: 17,
    color: "#000000",
    lineHeight: 24,
    textAlign: "center",
  },
  nadpisText: {
    fontSize: 22,
    color: "#000000",
    lineHeight: 24,
    paddingBottom: 3,
    textAlign: "center",
  },
});
