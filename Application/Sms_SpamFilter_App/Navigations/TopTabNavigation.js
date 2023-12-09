import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SpamMessages from '../Screens/HomePanel/Messages/SpamMessages';
import NonSpamMessages from '../Screens/HomePanel/Messages/NonSpamMessages';

//Ignore Warnings
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  const backButton = (navigation) => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <MaterialCommunityIcons name="arrow-left" color="black" size={30} />
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        indicatorStyle: { backgroundColor: 'green' },
        style: { marginTop: 50 },
      }}
    >
      <Tab.Screen
        name="Spam Messages"
        component={SpamMessages}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message" color={color} size={26} />
          ),
          tabBarLabel: 'Spam',
          tabBarPress: () => navigation.goBack(), 
        })}
      />
      <Tab.Screen
        name="NonSpam Messages"
        component={NonSpamMessages}
        options={({ navigation }) => ({
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="message" color={color} size={26} />
              ),
          tabBarLabel: 'Non Spam Messages',
        })}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
