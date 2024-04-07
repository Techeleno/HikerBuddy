import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectModeScreen from './Pick';


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
      <SelectModeScreen></SelectModeScreen>
      <Image
        style={styles.avatar}
        source={require('./assets/character.png')}
      />
     <Pressable
  onPress={() => navigation.navigate('Community', { name: 'Jane' })}
  title="Hike"
  style={({ pressed }) => [
    {
      flexDirection: 'row', // Arrange items horizontally
      backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#0047AB',
      width: 250,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 3,
      borderColor: '#AEDEB8',
      padding: 10
    }
  ]}
>
  {({ pressed }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={[styles.boldText, { color: pressed ? 'blue' : 'white', marginRight: 10 }]}>
        {pressed ? 'Pressed!' : 'START HIKE'}
      </Text>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/post.png')}
      />
    </View>
  )}
</Pressable>

      <View style={styles.buttonRow}>
        <CustomButton
          title="START HIKE"
          onPress={() => navigation.navigate('Shop', { name: 'Jane' })}
        />
        <CustomButton
          title="SHOP"
          onPress={() => navigation.navigate('Shop', { name: 'Jane' })}
        />
        <CustomButton
          title="TIPS"
          onPress={() => navigation.navigate('Tips', { name: 'Jane' })}
        />
      </View>
      <CustomButton
        title="COMMUNITY POSTS"
        onPress={() => navigation.navigate('Community', { name: 'Jane' })}
      />
    </View>
  );
};

const CustomButton = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#0047AB',
          borderColor: '#AEDEB8',
        },
      ]}
    >
      {({ pressed }) => (
        <Text style={[styles.boldText, { color: pressed ? 'blue' : 'white' }]}>
          {pressed ? 'Pressed!' : title}
        </Text>
      )}
    </Pressable>
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
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
    width: 200,
    height: 300,
  },
  boldText: {
    fontFamily: 'CustomFont-Bold', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});
