import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import Screen from "../components/Screen";

interface LargeButtonProps {
  children: React.ReactNode
}

const LargeButton: React.FC<LargeButtonProps | TouchableOpacityProps> = ({ children, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.75} {...props}>
      {children}
    </TouchableOpacity>
  )
}

const HomeScreen = () => {
  const { colors } = useTheme();

  return (
  <Screen safeArea={{edges: ['left', 'right', 'bottom']}}>
      <ScrollView>
      {/*<Text style={[styles.headerText, {color: colors.text}]}>OfficeDemo</Text>*/}

      <View style={styles.hero}>
        <Image source={require("../assets/img/toa-heftiba-FV3GConVSss-unsplash.jpg")} />
      </View>

      <View style={styles.locksContainer}>
        <LargeButton style={styles.largeButton}>
          <Text style={[{color: colors.text}]}>Unlock Main Entrance</Text>
        </LargeButton>
        <LargeButton style={styles.largeButton}>
          <Text style={[{color: colors.text}]}>Unlock Your Office</Text>
        </LargeButton>
      </View>
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  hero: {
    height: 200,
    width: "100%",
    backgroundColor: "#000010"
  },
  headerText: {
    marginTop: 32,
    fontSize: 40,
    paddingStart: 16,
    fontWeight: "bold"
  },
  locksContainer: {
    marginTop: 12,
    // flexDirection: "row",
    paddingHorizontal: 12
  },
  largeButton: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
    margin: 4,
    borderRadius: 16
  }
})
