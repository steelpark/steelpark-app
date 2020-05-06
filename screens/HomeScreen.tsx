import React from "react";
import { Image, Platform, ScrollView, StyleSheet, View } from "react-native";
import { Aller_Std_It, Aller_Std_BdIt } from "../components/StyledText";
import { NavigationStackScreenProps } from "react-navigation-stack";

export default function HomeScreen(props: NavigationStackScreenProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.welcomeImage}
            />
          </View>
          <View>
            <Aller_Std_BdIt style={styles.NadpisText}>
              VITAJTE !{" "}
            </Aller_Std_BdIt>
          </View>

          <View>
            <Aller_Std_It style={styles.getStartedText}>
              Sme parkom vedy a zábavy. Prinášame malým i veľkým zážitok zo
              spoznávania. Chceme, aby deti a mládež pri skúmaní vedeckých
              hypotéz a overovaní technických a prírodných zákonitostí
              napredovali, aby sa nenudili, ale zabávali.
            </Aller_Std_It>
          </View>

          <View style={styles.bottomContainer}>
            <Image
              source={require("../assets/homescreenbottom.png")}
              style={styles.bottomImage}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

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
  bottomContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 450,
    height: 200,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  bottomImage: {
    width: 400,
    height: 200,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: 0,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  NadpisText: {
    fontSize: 22,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    paddingBottom: 3,
    textAlign: "center",
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        backgroundColor: "black",
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "#E5280F",
    textAlign: "center",
  },
});
