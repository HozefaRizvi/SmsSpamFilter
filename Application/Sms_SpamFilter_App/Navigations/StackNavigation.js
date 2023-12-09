// StackNavigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '../ReactontextApi/AuthContext';

//Ignoring whte warnings
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
// Import Screens
import SplashScreenPage from '../Screens/Authentication/SplashScreen';
import SignInScreen from '../Screens/Authentication/SignIn';
import SignUpScreen from '../Screens/Authentication/SignUp';
import TabNavigation from './TabNavigation';
import TopTabNavigation from './TopTabNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreenPage} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="TopTabNavigation" component={TopTabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default StackNavigation;
