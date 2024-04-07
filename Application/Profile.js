import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable, Image, Button, TouchableOpacity, Linking} from 'react-native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectModeScreen from './Pick';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import { Button as ButtonTwo, Card, Header, Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SelectModeScreenSmall from './Pick copy';


const Stack = createNativeStackNavigator();

export default function Profile() {
  
  return HomeScreen();
}

const HomeScreen = () => {
  return (
      <LinearGradient
      colors={['#c9a5c3', '#37ab9f', '#40436e']}
      style={styles.gradientBackground}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Pressable
      style={() => [
      {
      backgroundColor: '#0047AB',
      width: 400,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      marginTop: 10,
      flexDirection: 'row',
      }
    ]}
>
  <Image
    style={styles.circle}
    source={require('./assets/girl.png')}
  />
  <Text style={[styles.boldText, { color: 'white', marginTop: 10 }]}>
    {'Hiker\nLevel 1'}
  </Text>
  
</Pressable>

</View>
  
  <Text style={[styles.heading, { color: 'white', marginTop: 1 }]}>
  {""}
  </Text>
  <Pressable
  style={({ pressed }) => [
    {
      width: 300,
      height: 30,
      borderRadius: 20,
      overflow: 'hidden', // Ensure children don't overflow the parent
      backgroundColor: '#0047AB' 
    }
  ]}
>
  <View style={styles.progressBar}></View>
  <Text style={[styles.boldText, { color: 'white', textAlign: "center"}]}>
    {"150 EXP needed"}
  </Text>
</Pressable>
<Text style={[styles.heading, { color: 'white', marginLeft: 10 }]}>
  {"ACHIEVEMENTS"}
  </Text>
  <Text style={[styles.boldText, { color: 'white', marginLeft: 10 }]}>
  {"\nCONQUERED THE GROUSE GRIND"}
  </Text>
    <Image
    style={styles.avatar}
    source={require('./assets/GG.png')}
  />
<Text style={[styles.boldText, { color: 'white', marginLeft: 10 }]}>
  {"\nREACH LEVEL 1"}
  </Text>
<Image
    style={styles.avatar}
    source={require('./assets/ach-1.png')}
  />
<Text style={[styles.boldText, { color: 'white', marginLeft: 10 }]}>
  {"\nCONQUERED BC PARK TRAILS"}
  </Text>
<Image
    style={styles.avatar}
    source={require('./assets/seymour.png')}
  />


<View style={styles.horizontalContainer}>
<SelectModeScreenSmall
  buttonTitle="About"
  onPress={() => Linking.openURL('https://devpost.com/software/hiker-pal')}
/>
<SelectModeScreenSmall
  buttonTitle="Share"
  onPress={() => Linking.openURL('https://www.facebook.com/')}
/>

</View>

    
    </LinearGradient>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEDEB8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: -10,
  },
  buttonMid: {
    flexDirection: 'row',
    marginVertical: 70,
  },
  button: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    padding: 10,
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
  avatar: {
    width: 250,
    height: 100,
    borderRadius: 10,
  },
  boldText: {
    fontFamily: 'CustomFont-Bold', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the color and opacity as needed
    borderRadius: 50,
    alignItems: 'left',
    marginRight: 25,
    marginLeft: -40
  },
  setting: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the color and opacity as needed
    borderRadius: 50,
    alignItems: 'left',
    marginRight: 5,
    marginLeft: -30
  },
  heading: {
    fontFamily: 'CustomFont-Bold', 
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // You can adjust the spacing as needed
    alignItems: 'center', // Align items vertically
    margin: 10, // Adjust the margin as needed
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '50%', // Adjust this value to control the progress
    backgroundColor: '#a3afc9', // Change this to the color of the progress bar
  }
   
 
});
