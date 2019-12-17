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

HomeStack.path = "";

const OblastiStack = createStackNavigator(
  {
    Oblasti: OblastiScreen,
    ExponatList: ExponatListScreen,
    ExponatDetail: ExponatDetailScreen
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
    ZoznamExponatovNavBar: ZoznamExponatovNavBarScreen,
    ExponatDetail: ExponatDetailScreen
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
  OblastiStack,
  ZoznamExpoNavBarStack
});

export default tabNavigator;
