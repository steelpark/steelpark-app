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
import InformacieScreen from "../screens/InformacieScreen";
import WarningInternetScreen from "../screens/WarningInternetScreen";

const config = Platform.select({
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Informacie: {
      screen: InformacieScreen,
      navigationOptions: {
        headerTintColor: "#288FE1",
        title: "Informácie",
      },
    },
    Warning: {
      screen: WarningInternetScreen,
      navigationOptions: {},
    },
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Domov",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-home"} />
  ),
};

const NavigationStack = createStackNavigator(
  {
    Navigation: {
      screen: NavigationScreen,
      navigationOptions: {
        headerTintColor: "#288FE1",
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
        headerTintColor: "#288FE1",
        title: "Na ktorom poschodí sa nachádzate ?",
      },
    },
    Cesta: {
      screen: NavigaciaCestaScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Cesta k exponátu: " + `${navigation.getParam("nazov")}`,
        headerTintColor: "#288FE1",
      }),
    },
    Warning: {
      screen: WarningInternetScreen,
      navigationOptions: {},
    },
  },
  config
);

NavigationStack.navigationOptions = {
  tabBarLabel: "Navigácia",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-map"} />,
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
        headerTintColor: "#288FE1",
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
        headerTintColor: "#288FE1",
        title: "Zoznam exponátov",
      },
    },
    ExponatDetail: {
      screen: ExponatDetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.getParam("nazov")}`,
        headerTintColor: "#288FE1",
      }),
    },
    Warning: {
      screen: WarningInternetScreen,
      navigationOptions: {},
    },
  },
  config
);

OblastiStack.navigationOptions = {
  tabBarLabel: "Oblasti",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-filing"} />
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
        headerTintColor: "#288FE1",
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
        headerTintColor: "#288FE1",
        title: "Zoznam exponátov",
      },
    },
    ExponatDetail: {
      screen: ExponatDetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.getParam("nazov")}`,
        headerTintColor: "#288FE1",
      }),
    },
    Warning: {
      screen: WarningInternetScreen,
      navigationOptions: {},
    },
  },
  config
);

PoschodieStack.navigationOptions = {
  tabBarLabel: "Poschodie",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-menu"} />
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
