import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
// import {useTheme} from '@react-navigation/native';

import Screen from '../components/Screen';
import {ButtonOutlined} from '../components/Button';
import CenteredModal from '../components/Modal';
import {BodyText} from '../components/Text';

import FA5 from "react-native-vector-icons/FontAwesome5";
import Ionicon from "react-native-vector-icons/Ionicons";
import FA from "react-native-vector-icons/FontAwesome";

import { PRIMARY_COLOR } from "../constants/branding";

const HomeScreen = () => {
  // const {colors} = useTheme();

  const [isModalVisible, setModalVisible] = useState(false);
  const hideModal = () => setModalVisible(false);

  const handleUnlockPress = () => {
    setModalVisible(true);
  };

  return (
    <Screen safeArea={{edges: ['left', 'right', 'bottom']}}>
      <ScrollView>
        <ImageBackground source={require("../../assets/images/toa-heftiba-FV3GConVSss-unsplash.jpg")}
                         style={styles.hero} />
        <View style={styles.locksContainer}>
            <ButtonOutlined style={styles.largeButton}>
              <FA5 name="building" size={40} color={PRIMARY_COLOR} />
              <BodyText style={styles.lockButtonLabel}> Unlock Main Entrance</BodyText>
            </ButtonOutlined>
            <ButtonOutlined style={styles.largeButton} onPress={handleUnlockPress}
            >
              <FA5 name="door-open" size={40} color={PRIMARY_COLOR} />
              <BodyText style={styles.lockButtonLabel}> Unlock Office Entrance</BodyText>
            </ButtonOutlined>
            <ButtonOutlined style={styles.largeButton}>
              <Ionicon name="people" size={40} color={PRIMARY_COLOR} />
              <BodyText style={styles.lockButtonLabel}> Book Conference Room</BodyText>
            </ButtonOutlined>
            <ButtonOutlined style={styles.largeButton}>
              <FA name="calendar-plus-o" size={40} color={PRIMARY_COLOR} />
              <BodyText style={styles.lockButtonLabel}> Extend Lease</BodyText>
            </ButtonOutlined>
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
    width: '100%',
    backgroundColor: '#000010',
  },
  headerText: {
    marginTop: 32,
    fontSize: 40,
    paddingStart: 16,
    fontWeight: 'bold',
  },
  locksContainer: {
    marginTop: 12,
    flexDirection: 'column',
    paddingHorizontal: 8,
  },
  largeButton: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    margin: 10,
    width: "90%",
    backgroundColor: "transparent",
    borderColor: PRIMARY_COLOR,
    borderWidth: 3,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    height: 100,
    margin: 20,
    backgroundColor: '#ffffff',
  },
  unlockAnimation: {
    margin: 12
  },
  lockButtonLabel: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    margin: 5
  }
});
