import AppStatusBar from './StatusBar';
import React from 'react';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';
import { StatusBarProps } from "react-native";

interface ScreenProps {
  children: React.ReactNode;
  safeArea?: SafeAreaViewProps;
  statusBar?: StatusBarProps;
}

const Screen: React.FC<ScreenProps> = props => {
  return (
    <SafeAreaView {...props.safeArea}>
      <AppStatusBar {...props.statusBar}/>
      {props.children}
    </SafeAreaView>
  );
};

export default Screen;
