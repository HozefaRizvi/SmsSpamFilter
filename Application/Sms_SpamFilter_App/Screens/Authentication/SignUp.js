import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { baseurl } from '../../ApiFetching/apilink';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      setLoading(true);

      const response = await axios.post(`${baseurl}/SignUp_user`, {
        Email: email,
        password: password,
      });

      setLoading(false);

      setSignupSuccess(true);
    } catch (error) {
      setLoading(false);
      setError('Error signing up: ' + error.response.data.error);
      console.error('Error signing up:', error.message);
    }
  };


  const closeModal = () => {
    setModalVisible(false);
    setSignupSuccess(false);
    navigation.navigate('SignInScreen');
  };

  useEffect(() => {
    if (signupSuccess) {
      setModalVisible(true);
    }
  }, [signupSuccess]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.loginpic}
        source={require('../../Logos/SignUpLogo.png')}
      />
      <View style={styles.login}>
        <Text style={styles.signInText}>Sign Up</Text>
        <View>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            theme={{
              colors: {
                primary: '#3498db',
                text: '#3498db',
                placeholder: '#bdc3c7',
              },
            }}
            style={styles.input}
          />
          <Icon name="envelope" size={30} color="#4A6DD9" style={styles.icon} />
        </View>
        <View>
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
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
          <Icon name="lock" size={30} color="#4A6DD9" style={styles.icon} />
        </View>
        <Text style={styles.errorText}>{error}</Text>
        <Button
          mode="outlined"
          onPress={handleSignUp}
          style={styles.button}
        >
          <Text style={styles.signintext}>Sign Up</Text>
        </Button>
        <TouchableOpacity>
          <Text style={styles.signupText}>
            Already have an Account?{' '}
            <Text style={styles.signupLinkText} onPress={() => navigation.navigate('SignInScreen')}>
              Sign In
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#3498db" />
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Signup Successful!</Text>
            <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEBFF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    width: wp('100%'),
    flex: 2,
    backgroundColor: '#F2F2F2',
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
    color: '#4A6DD9',
  },
  input: {
    marginBottom: hp('3%'),
    backgroundColor: '#F2F2F2',
  },
  loginpic: {
    width: wp('50%'),
    height: hp('35%'),
    resizeMode: 'contain',
    marginTop: hp('4%'),
  },
  button: {
    marginTop: hp('2%'),
    backgroundColor: '#4A6DD9',
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
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: hp('2%'),
    marginTop: hp('2%'),
  },
});
