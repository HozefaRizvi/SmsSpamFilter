import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput, Button, Avatar, Card, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NonSpamMessages({ navigation }) {
  const renderCards = () => {
    const cards = [];
    for (let i = 1; i <= 5; i++) {
      cards.push(
        <Card.Title
          key={i}
          title={`Sender ${i}...`}
          subtitle={`Message body ${i}....`}
          left={(props) => <Avatar.Icon {...props} icon="message" />}
          right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />
      );
    }
    return cards;
  };

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="blue" />
      </TouchableOpacity>

  
      <Text style={styles.headingText}>NonSpam Messages:</Text>
      {/* Scroll View with Cards */}
      <ScrollView style={styles.scrollView}>
        {renderCards()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16, // Add padding for better content alignment
  },
  backButton: {
    position: 'absolute',
    top: hp('3%'),
    left: wp('3%'),
    zIndex: 1,
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop:50
  },
  scrollView: {
    flex: 1,
   
    marginTop:10
  },
});
