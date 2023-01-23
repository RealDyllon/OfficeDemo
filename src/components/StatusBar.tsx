import React from "react";
import { useColorScheme, StatusBar as RNStatusBar } from "react-native";

const AppStatusBar = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <RNStatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      // backgroundColor={backgroundStyle.backgroundColor}
    />
  )
}

export default AppStatusBar
