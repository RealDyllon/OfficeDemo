import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import Screen from "../components/Screen";

const HomeScreen = () => {
  const { colors } = useTheme();

  return (
    <Screen>
      <ScrollView>
        <Text style={[styles.headerText, { color: colors.text }]}>
          OfficeDemo
        </Text>

        <View style={styles.locksContainer}>
          <TouchableOpacity style={styles.lockButton} activeOpacity={0.75}>
            <Text style={[{ color: colors.text }]}>Unlock Main Entrance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lockButton} activeOpacity={0.75}>
            <Text style={[{ color: colors.text }]}>Unlock Your Office</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerText: {
    marginTop: 32,
    fontSize: 40,
    paddingStart: 16,
    fontWeight: "bold"
  },
  locksContainer: {
    flexDirection: "row"
  },
  lockButton: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
    margin: 4,
    borderRadius: 16
  }
});
