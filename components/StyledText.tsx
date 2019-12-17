import React from "react";
import { Text } from "react-native";

export function Aller_Std_It(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "aller-std-it" }]} />
  );
}

export function Aller_Std_BdIt(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "aller-std-BdIt" }]} />
  );
}
