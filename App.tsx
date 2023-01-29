import React, {useState} from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import BookingsScreen from './src/screens/BookingsScreen';
import AccountScreen from './src/screens/AccountScreen';
import SignInScreen from './src/screens/SignInScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const BookingsStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Bookings'}>
      <Stack.Screen name="Bookings" component={BookingsScreen} />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Account'}>
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
};

function App(): JSX.Element {
  const scheme = useColorScheme();
  const isSignedIn = useState(false);
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        {isSignedIn ? (
          <SignInScreen />
        ) : (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              freezeOnBlur: true,
            }}>
            <Tab.Screen
              name="HomeTab"
              component={HomeStack}
              options={{
                tabBarLabel: 'Home',
              }}
            />
            <Tab.Screen
              name="BookingsTab"
              component={BookingsStack}
              options={{
                tabBarLabel: 'Bookings',
              }}
            />
            <Tab.Screen
              name="AccountTab"
              component={AccountStack}
              options={{
                tabBarLabel: 'Account',
              }}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
