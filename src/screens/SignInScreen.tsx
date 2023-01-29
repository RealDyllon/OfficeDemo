import Screen from '../components/Screen';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {APP_NAME} from '../constants/branding';
import {BodyText} from '../components/Text';
import {ButtonOutlined} from '../components/Button';

const SignInScreen = () => {
  return (
    <Screen safeArea={{edges: ['left', 'right', 'bottom']}}>
      <View style={styles.hero}>
        <BodyText>Welcome to {APP_NAME} </BodyText>
      </View>
      <ButtonOutlined labelStyle={styles.SignInButtonlabel} label={'Sign in'} />
    </Screen>
  );
};
const styles = StyleSheet.create({
  hero: {
    height: '55%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignInButtonlabel: {
    fontWeight: 'bold',
  },
});

export default SignInScreen;
