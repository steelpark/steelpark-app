import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import OblastiScreen from "../screens/OblastiScreen";
import ZoznamExponatovNavBarScreen from "../screens/ZoznamExpoNavBarScreen";
import ExponatListScreen from "../screens/ExponatListScreen";
import ExponatDetailScreen from "../screens/ExponatDetailScreen";
import NavigationScreen from "../screens/NavigationScreen";

const config = Platform.select({
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Domov",

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

const NavigationStack = createStackNavigator(
  {
    Navigation: {
      screen: NavigationScreen,
      navigationOptions: {
        headerTintColor: "#BC6606",
        title: "Navigacia"
      }
    }
  },
  config
);

NavigationStack.navigationOptions = {
  tabBarLabel: "Navigacia",

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios" ? `ios-map${focused ? "" : "-outline"}` : "md-map"
      }
    />
  )
};

NavigationStack.path = "";

const OblastiStack = createStackNavigator(
  {
    Oblasti: {
      screen: OblastiScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#FFFFFF"
        },
        headerTitleContainerStyle: {
          backgroundColor: "#FFF"
        },
        headerTintColor: "#BC6606",
        title: "Oblasti"
      }
    },
    ExponatList: {
      screen: ExponatListScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#FFFFFF"
        },
        headerTitleContainerStyle: {
          backgroundColor: "#FFF"
        },
        headerTintColor: "#BC6606",
        title: "Zoznam exponatov"
      }
    },
    ExponatDetail: {
      screen: ExponatDetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.getParam("nazov")}`,
        headerTintColor: "#BC6606"
      })
    }
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
  )
};

OblastiStack.path = "";

const ZoznamExpoNavBarStack = createStackNavigator(
  {
    ZoznamExponatovNavBar: {
      screen: ZoznamExponatovNavBarScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#FFFFFF"
        },
        headerTitleContainerStyle: {
          backgroundColor: "#FFF"
        },
        headerTintColor: "#BC6606",
        title: "Zoznam exponatov"
      }
    },
    ExponatDetail: {
      screen: ExponatDetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.getParam("nazov")}`,
        headerTintColor: "#BC6606"
      })
    }
  },
  config
);

ZoznamExpoNavBarStack.navigationOptions = {
  tabBarLabel: "Zoznam exponatov",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-card" : "md-card"}
    />
  )
};

ZoznamExpoNavBarStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  NavigationStack,
  OblastiStack,
  ZoznamExpoNavBarStack
});

export default tabNavigator;
