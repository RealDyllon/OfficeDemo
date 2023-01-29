import AppStatusBar from './StatusBar';
import React from 'react';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

interface ScreenProps {
  children: React.ReactNode;
  safeArea?: SafeAreaViewProps;
}

const Screen: React.FC<ScreenProps> = props => {
  return (
    <SafeAreaView {...props.safeArea}>
      <AppStatusBar />
      {props.children}
    </SafeAreaView>
  );
};

export default Screen;
