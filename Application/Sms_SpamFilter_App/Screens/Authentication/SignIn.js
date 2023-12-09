import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { baseurl } from '../../ApiFetching/apilink';
import { useAuth } from '../../ReactontextApi/AuthContext';
export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const { setUser } = useAuth();
  const handleSignIn = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${baseurl}/Login_user`, {
        Email: email,
        password: password,
      });

      if (response.status === 200) {
        // Successful login
        setUser({
          user_data: {
            email:   response.data.user_data.email,
            password: response.data.user_data.password
          },
        });
        navigation.navigate("TabNavigation");
      } else {
        // Login failed
        setErrorText('Incorrect email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response && error.response.status === 401) {
        setErrorText('Incorrect email or password');
      } else {
        setErrorText('An error occurred during login. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.loginpic}
        source={require('../../Logos/LoginLogo.png')}
      />
      <View style={styles.login}>
        <Text style={styles.signInText}>Sign In</Text>
        <View>
          <TextInput
            label="Email"
            onChangeText={(text) => setEmail(text)}
            theme={{
              colors: {
                primary: '#3498db',
                text: '#3498db',
                placeholder: '#bdc3c7',
              },
            }}
            style={styles.input}
          />
          <Icon name="envelope" size={30} color="#439993" style={styles.icon} />
        </View>
        <View>
          <TextInput
            label="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            theme={{
              colors: {
                primary: '#3498db',
                text: '#3498db',
                placeholder: '#bdc3c7',
              },
            }}
            style={styles.input}
          />
          <Icon name="lock" size={30} color="#439993" style={styles.icon} />
        </View>
        <Button
          mode="outlined"
          onPress={handleSignIn}
          style={styles.button}
        >
          <Text style={styles.signintext}>Sign In</Text>
        </Button>
        {loading && <ActivityIndicator size="large" color="#439993" />}
        {errorText !== '' && <Text style={styles.errorText}>{errorText}</Text>}
        <TouchableOpacity>
          <Text style={styles.signupText}>
            Don't have an account?{' '}
            <Text style={styles.signupLinkText} onPress={() => navigation.navigate('SignUpScreen')}>
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7DCE8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    width: wp('100%'),
    flex: 2,
    backgroundColor: 'white',
    padding: wp('5%'),
    borderRadius: wp('3%'),
    elevation: 5,
    borderTopLeftRadius: wp('8%'),
    borderTopRightRadius: wp('8%'),
    marginTop: hp('1%'),
  },
  signInText: {
    fontSize: hp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
    color: '#439993',
  },
  input: {
    marginBottom: hp('3%'),
    backgroundColor: '#E7DCE8',
  },
  loginpic: {
    width: wp('50%'),
    height: hp('35%'),
    resizeMode: 'contain',
    marginTop: hp('4%'),
  },
  button: {
    marginTop: hp('2%'),
    backgroundColor: '#439993',
    padding: 4,
    borderRadius: 10,
  },
  signupText: {
    marginTop: hp('4%'),
    textAlign: 'center',
    color: '#404040',
    fontSize: hp('2%'),
  },
  signintext: {
    textAlign: 'center',
    color: 'white',
    fontSize: hp('2%'),
  },
  signupLinkText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: hp('2%'),
    fontSize: hp('2%'),
  },
});
