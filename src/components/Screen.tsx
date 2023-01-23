import AppStatusBar from "./StatusBar";
import React from "react";
import { SafeAreaView } from "react-native";

interface ScreenProps {
  children: React.ReactNode
}

const Screen: React.FC<ScreenProps> = (props) => {
  return (
    <SafeAreaView>
      <AppStatusBar />
      {props.children}
    </SafeAreaView>
  )
}


export default Screen
