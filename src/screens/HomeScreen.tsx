import AppStatusBar from "../components/StatusBar";
import { SafeAreaView, Text } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <AppStatusBar />
      <Text>OfficeDemo</Text>
    </SafeAreaView>
  )
}

export default HomeScreen
