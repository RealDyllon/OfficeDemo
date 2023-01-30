import Screen from '../components/Screen';
import {Image, StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {PRIMARY_COLOR} from '../constants/branding';
import {BodyText} from '../components/Text';
import {ButtonOutlined} from '../components/Button';
import {AuthContext} from '../store/authContext';

const SignInScreen = () => {
  const {setIsLoggedIn} = useContext(AuthContext);

  return (
    <Screen
      safeArea={{edges: ['left', 'right', 'bottom']}}
      statusBar={{barStyle: 'light-content'}}>
      <View style={styles.view}>
        <View style={styles.hero}>
          <Image
            source={require('../images/signin.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.welcomeTextContainer}>
          <BodyText style={styles.welcomeText}>
            Welcome to {'\n'}your new office.
          </BodyText>
        </View>
        <View style={styles.ButtonContainer}>
          <ButtonOutlined
            labelStyle={styles.SignInButtonlabel}
            label={'Sign in'}
            style={styles.SignInButton}
            onPress={() => setIsLoggedIn(true)}
          />
          <ButtonOutlined
            labelStyle={styles.RegisterButtonlabel}
            label={'Register for an account'}
            style={styles.RegisterButton}
          />
        </View>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  view: {
    height: '100%',
  },
  hero: {
    height: '60%',
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignInButtonlabel: {
    fontWeight: '600',
    fontSize: 18,
    color: '#ffffff',
  },
  RegisterButtonlabel: {
    color: PRIMARY_COLOR,
    fontWeight: '600',
    fontSize: 18,
  },

  image: {
    height: '100%',
    width: '100%',
  },
  welcomeText: {
    fontSize: 40,
    margin: 36,
    fontWeight: '600',
    lineHeight: 37,
  },
  welcomeTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  SignInButton: {
    margin: 4,
    borderRadius: 36,
  },
  RegisterButton: {
    backgroundColor: 'transparent',
    borderColor: PRIMARY_COLOR,
    borderRadius: 36,
  },
  ButtonContainer: {
    marginBottom: 30,
  },
});

export default SignInScreen;
