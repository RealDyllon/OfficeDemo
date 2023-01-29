import Screen from "../components/Screen";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_NAME } from "../constants/branding";
import { BodyText } from "../components/Text";

const SignInScreen = () => {
  return (
    <Screen safeArea={{ edges: ["left", "right", "bottom"] }}>
      <View style={styles.hero}>
        <BodyText>Welcome to {APP_NAME} </BodyText>
      </View>
      <TouchableOpacity style={styles.SignInButton}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </Screen>
  );
};
const styles = StyleSheet.create({
  hero: {
    height: "55%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center"
  },
  SignInButton: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    marginHorizontal: 12,
    padding: 12,
    borderRadius: 8,
    borderColor: "#888"
  }
});

export default SignInScreen;
