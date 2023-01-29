import React from "react";
import { StatusBar as RNStatusBar, StatusBarProps, useColorScheme } from "react-native";


const AppStatusBar: React.FC<StatusBarProps> = ({ ...props }) => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <RNStatusBar
      barStyle={isDarkMode ? "light-content" : "dark-content"}
      {...props}
      // backgroundColor={backgroundStyle.backgroundColor}
    />
  );
};

export default AppStatusBar;
