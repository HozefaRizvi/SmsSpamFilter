import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from 'react-native-paper';
import { useAuth } from '../../ReactontextApi/AuthContext';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
export default function HomeScreen({ navigation }) {
  const { userData } = useAuth();
  const navigateToProfile = () => {
   
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomePhotoContainer}>
        <Image
          source={require('../../Logos/Welcomelogo.png')} 
          style={styles.welcomePhoto}
        />
      </View>

      <View style={styles.header}>
        <Text style ={{fontSize:20,marginTop:5}}>Welcome {userData.user_data.email}</Text>
        <TouchableOpacity onPress={navigateToProfile}>
          <Image
            source={require('../../Logos/Profilepic.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>Spam Filtering Application</Text>
        <Text style={styles.paragraph}>
          This application helps you filter spam messages and keep your inbox clean and secure.
        </Text>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('TopTabNavigation')} 
          style={styles.filterButton}
        >
          Start Filtering Messages
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCBBD',
    padding: wp(5),
  },
  welcomePhotoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  welcomePhoto: {
    width: wp(80),
    height: hp(20),
    resizeMode: 'contain',
    marginTop:36
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', 
    borderRadius: 20,
    backgroundColor: '#E7DCE8',
    marginTop: hp('2%'),
    padding: 15,
    marginBottom:30
  },
  profileImage: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    
  },
  content: {
  
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
    marginBottom:hp('20%'),
    backgroundColor:'#F2F2F2',
    height:hp('40%'),
    padding:20,
    borderRadius:20
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: hp(2),
  },
  paragraph: {
    textAlign: 'left', 
    marginBottom: hp(4),
    fontSize:20
  },
  filterButton: {
    backgroundColor: '#AD7282',
    marginTop: hp(2),
    alignSelf: 'center', 
    width:wp('80%'),
    padding:5
  },
});
