import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectModeScreen from './Pick';
import { LinearGradient } from 'expo-linear-gradient';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hiker Buddy"
          component={HomeScreen}
          options={{ headerTitleAlign: 'center', title: 'Home' }}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Tips"
          component={TipsScreen}
          options={{ headerTitleAlign: 'center', title: 'Tips' }}
        />
        <Stack.Screen
          name="Community"
          component={CommunityScreen}
          options={{ headerTitleAlign: 'center', title: 'Community Posts' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#c9a5c3', '#37ab9f', '#40436e']}
      style={styles.gradientBackground}
    >
      <Image
        style={styles.avatar}
        source={require('./assets/character.png')}
      />
      
       
        <SelectModeScreen buttonTitle="Start Hike"  
        onPress={() => navigation.navigate('Shop', { name: 'Jane' })}
        imageSource={require('./assets/hike_icon.png')}/>
       

    

      <SelectModeScreen buttonTitle="Shop"  
      onPress={() => navigation.navigate('Shop', { name: 'Jane' })}
      imageSource={require('./assets/shop.png')}/>
      
      <SelectModeScreen buttonTitle="Tips"  
      onPress={() => navigation.navigate('Tips', { name: 'Jane' })}
      imageSource={require('./assets/tips.png')}/>
      <SelectModeScreen buttonTitle="Community"  
      onPress={() => navigation.navigate('Community Posts', { name: 'Jane' })}
      imageSource={require('./assets/community.png')}/>
      </LinearGradient>
    </View>
  );
};

const ShopScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>This is {route.params.name}'s Shop</Text>
    </View>
  );
};

const TipsScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>This is {route.params.name}'s Tips</Text>
    </View>
  );
};

const CommunityScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>This is {route.params.name}'s Community Posts</Text>
    </View>
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
    height: 350,
    marginTop: 20,
  },
  boldText: {
    fontFamily: 'CustomFont-Bold', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});
