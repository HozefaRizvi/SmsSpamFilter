import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreenPage() {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignInScreen'); 
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={{ height: hp('40%'), width: wp('40%') }} 
        source={require('../../Logos/SplashScreenLogo.png')}
      />
      <Text style={styles.heading}>SMS Spam Filtering Application</Text>
      <Image
        style={{ height: hp('20%'), width: wp('40%') }} 
        source={require('../../Logos/LoadingAnimation.gif')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: hp('3%'), // Adjust the percentage based on your layout
    fontWeight: 'bold',
    marginTop: hp('2%'), // Adjust the percentage based on your layout
  },
});
