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

export default function Hike() {
  
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
      width: 200,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      marginTop: 10,
      flexDirection: 'row',
      marginRight: 100
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
<Image
    style={styles.setting}
    source={require('./assets/setting.png')}
  />

</View>

  <Text style={[styles.heading, { color: 'white', marginTop: 1 }]}>
  {""}
  </Text>
  <SelectModeScreen buttonTitle="Location"  
    onPress={() => Linking.openURL('https://www.google.com/maps/search/hikes+around+me/@49.2148409,-123.036454,13z/data=!3m1!4b1?entry=ttu')}
    imageSource={require('./assets/pin.png')}/>
    <Image
    style={styles.avatar}
    source={require('./assets/GG.png')}
  />


<Pressable
      style={() => [
      {
      backgroundColor: '#0047AB',
      width: 300,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row',
      }
    ]}
>
<Text style={[styles.boldText, { color: 'white', marginLeft: 10 }]}>
  {"+ 150 Hiker Exp, + 50 Coins"}
  </Text>

</Pressable>




    <Text style={[styles.heading, { color: 'white', marginLeft: 10 }]}>
  {"CURRENT PARTY"}
  </Text>

  <Pressable
      style={() => [
      {
      backgroundColor: '#0047AB',
      width: 300,
      height: 240,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      marginTop: 10,
      flexDirection: 'row',
      }
    ]}
>
<View style={{ flexDirection: 'column', alignItems: 'left'}}>
  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
    <Image
      style={styles.circle}
      source={require('./assets/girl.png')}
    />
    <Text style={[styles.boldText, { color: 'white'}]}>
      {'Hiker\nLevel 1'}
    </Text>
  </View>
  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
    <Image
      style={styles.circle}
      source={require('./assets/icon.png')}
    />
    <Text style={[styles.boldText, { color: 'white'}]}>
      {'Guide\nLevel 99'}
    </Text>
  </View>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image
      style={styles.circle}
      source={require('./assets/add_hiker.png')}
    />
    <Text style={[styles.boldText, { color: 'white'}]}>
      {'Add Hiker'}
    </Text>
  </View>
</View>


</Pressable>

<View style={styles.horizontalContainer}>
<SelectModeScreenSmall
  buttonTitle="Find Hikers"
  onPress={() => Linking.openURL('https://www.facebook.com/groups/808903849314933/')}
/>
<SelectModeScreenSmall
  buttonTitle="Invite Friends"
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
   
 
});
