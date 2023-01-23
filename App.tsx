import React from "react";
import { SafeAreaView, Text } from "react-native";
import AppStatusBar from "./src/components/StatusBar";

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <AppStatusBar />
      <Text>OfficeDemo</Text>
    </SafeAreaView>
  );
}

export default App;
