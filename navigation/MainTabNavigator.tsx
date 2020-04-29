import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import OblastiScreen from "../screens/OblastiScreen";
import PoschodieScreen from "../screens/PoschodieScreen";
import ExponatListOblastiScreen from "../screens/ExponatListOblastiScreen";
import ExponatListPoschodieScreen from "../screens/ExponatListPoschodieScreen";
import ExponatDetailScreen from "../screens/ExponatDetailScreen";
import NavigationScreen from "../screens/NavigationScreen";
import NavigaciaVyberPoschodiaScreen from "../screens/NavigaciaVyberPoschodiaScreen";
import NavigaciaCestaScreen from "../screens/NavigaciaCestaScreen";

const config = Platform.select({
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Domov",

  tabBarIcon: ({ focused, name }) => (
    <TabBarIcon focused={focused} name={"md-home"} />
  ),
};

const NavigationStack = createStackNavigator(
  {
    Navigation: {
      screen: NavigationScreen,
      navigationOptions: {
        headerTintColor: "#BC6606",
        title: "Vyberte si exponát",
      },
    },
    VyberPoschodia: {
      screen: NavigaciaVyberPoschodiaScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTitleContainerStyle: {
          backgroundColor: "#FFF",
        },
        headerTintColor: "#BC6606",
        title: "Kde sa nachádzate ?",
      },
    },
    Cesta: {
      screen: NavigaciaCestaScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTitleContainerStyle: {
          backgroundColor: "#FFF",
        },
        headerTintColor: "#BC6606",
        title: "Cesta k exponátu",
      },
    },
  },
  config
);

NavigationStack.navigationOptions = {
  tabBarLabel: "Navigácia",

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios" ? `ios-map${focused ? "" : "-outline"}` : "md-map"
      }
    />
  ),
};

NavigationStack.path = "";

const OblastiStack = createStackNavigator(
  {
    Oblasti: {
      screen: OblastiScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTitleContainerStyle: {
          backgroundColor: "#FFF",
        },
        headerTintColor: "#BC6606",
        title: "Oblasti",
      },
    },
    ExponatListOblasti: {
      screen: ExponatListOblastiScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTitleContainerStyle: {
          backgroundColor: "#FFF",
        },
        headerTintColor: "#BC6606",
        title: "Zoznam exponátov",
      },
    },
    ExponatDetail: {
      screen: ExponatDetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.getParam("nazov")}`,
        headerTintColor: "#BC6606",
      }),
    },
  },
  config
);

OblastiStack.navigationOptions = {
  tabBarLabel: "Oblasti",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  ),
};

OblastiStack.path = "";

const PoschodieStack = createStackNavigator(
  {
    PoschodieScreen: {
      screen: PoschodieScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTitleContainerStyle: {
          backgroundColor: "#FFF",
        },
        headerTintColor: "#BC6606",
        title: "Poschodie",
      },
    },
    ExponatListPoschodie: {
      screen: ExponatListPoschodieScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTitleContainerStyle: {
          backgroundColor: "#FFF",
        },
        headerTintColor: "#BC6606",
        title: "Zoznam exponátov",
      },
    },
    ExponatDetail: {
      screen: ExponatDetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.getParam("nazov")}`,
        headerTintColor: "#BC6606",
      }),
    },
  },
  config
);

PoschodieStack.navigationOptions = {
  tabBarLabel: "Poschodie",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-card" : "md-card"}
    />
  ),
};

PoschodieStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  NavigationStack,
  OblastiStack,
  PoschodieStack,
});

export default tabNavigator;
