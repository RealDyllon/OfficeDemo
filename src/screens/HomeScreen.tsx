import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";

import Screen from "../components/Screen";
import { ButtonOutlined } from "../components/Button";
import CenteredModal from "../components/Modal";
import { BodyText } from "../components/Text";

import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
  const { colors } = useTheme();

  const [isModalVisible, setModalVisible] = useState(false);
  const hideModal = () => setModalVisible(false);

  const handleUnlockPress = () => {
    setModalVisible(true);
  };

  return (
    <Screen safeArea={{ edges: ["left", "right", "bottom"] }}>
      <ScrollView>

        <ImageBackground source={require("../../assets/images/toa-heftiba-FV3GConVSss-unsplash.jpg")}
                         style={styles.hero} />

        <View style={styles.locksContainer}>
          <View style={styles.locksRow}>
            <ButtonOutlined style={styles.largeButton} label="Unlock Main Entrance" />
            <ButtonOutlined style={styles.largeButton} label="Unlock Your Office"
                            onPress={handleUnlockPress}
            />
          </View>
          <View style={styles.locksRow}>
            <ButtonOutlined style={styles.largeButton} label="Book Conference Room" />
            <ButtonOutlined style={styles.largeButton} label="Renew Lease" />
          </View>
          <CenteredModal isVisible={isModalVisible} onBackdropPress={hideModal}>
            <View style={styles.modal}>
              {/*<View style={styles.unlockAnimation}>*/}
              {/*<Lottie source={require('../../assets/animations/101692-unlock.json')} autoPlay loop/>*/}
              {/*</View>*/}
              <BodyText>Door unlock code</BodyText>
              <Text>1234</Text>
              <ButtonOutlined label="OK" onPress={hideModal} />
            </View>
          </CenteredModal>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  hero: {
    height: 300,
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
    flexDirection: "column",
    paddingHorizontal: 8
  },
  locksRow: {
    marginTop: 12,
    flexDirection: "row",
    paddingHorizontal: 8
  },
  largeButton: {
    flex: 1,
    paddingVertical: 60,
    width: "50%",


  },
  modal: {
    height: 100,
    margin: 20,
    backgroundColor: "#ffffff"
  },
  unlockAnimation: {
    margin: 12
  }
});
