import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput, Button, RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SettingScreen({ navigation }) {
  const [notificationStatus, setNotificationStatus] = useState('on');

  const handleNotificationChange = (value) => {
    setNotificationStatus(value);
  };

  const handleLogout = () => {
    // Add your logout logic here
    // For example, navigate to SignInScreen
    navigation.navigate('SignInScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../Logos/setting.png')} style={styles.logo}  resizeMode='contain'/>
      <Text style={styles.headingText}>Notification</Text>
      <View style={styles.radioContainer}>
        <View style={styles.radioButton}>
          <RadioButton
            value="on"
            status={notificationStatus === 'on' ? 'checked' : 'unchecked'}
            onPress={() => handleNotificationChange('on')}
          />
          <Text>On</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="off"
            status={notificationStatus === 'off' ? 'checked' : 'unchecked'}
            onPress={() => handleNotificationChange('off')}
          />
          <Text>Off</Text>
        </View>
      </View>

      {/* Logout Button */}
      <Button mode="contained" onPress={handleLogout} style={styles.logoutButton}>
         <Text style={ {fontSize:20}}>LogOut</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: wp('50%'),
    height: hp('20%'),
    marginBottom: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#AD7282',
    width: wp('90%'),
    marginTop: 20,
    borderWidth:10
  },
});
