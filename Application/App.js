import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import * as React from 'react';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const onPressShop = () => navigation.navigate('Shop');

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitleAlign: 'center', title: 'Home'}}
        />
        <Stack.Screen 
          name="Shop" 
          component={ShopScreen}
          options={{headerTitleAlign: 'center'}} />
        <Stack.Screen 
          name="Tips" 
          component={TipsScreen}
          options={{headerTitleAlign: 'center', title: 'Tips'}} />
        <Stack.Screen 
          name="Community" 
          component={CommunityScreen}
          options={{headerTitleAlign: 'center', title: 'Community Posts'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    //BELOW IS BUTTONS
    // <View >
    //   <View style={{ flexDirection:"row", justifyContent: 'center', size: 'lg' }}>
    //   <Button
    //     title="Shop"
    //     onPress={() =>
    //       navigation.navigate('Shop', {name: 'Jane'})
    //     }
    //   />
    //   <Button
    //     title="Tips"
    //     onPress={() =>
    //       navigation.navigate('Tips', {name: 'Jane'})
    //     }
    //   />
    //   </View>
    //   <Button
    //     title="Community Posts"
    //     onPress={() =>
    //       navigation.navigate('Community', {name: 'Jane'})
    //     }
    //   />
    // </View>

    //BELOW IS TOUCHABLE OPACITY
    // 'space-between', marginHorizontal: 500,
    <View >
      <View style={{ flexDirection:"row", justifyContent: 'center', size: 'lg' }}>
      {/* <TouchableOpacity style={styles.button} 
      onPress={onPressShop}
      >
        <Text>Shop</Text>
      </TouchableOpacity> */}
      <Button
        title="Shop"
        onPress={() =>
          navigation.navigate('Shop', {name: 'Jane'})
        }
      />
      <Button
        title="Tips"
        onPress={() =>
          navigation.navigate('Tips', {name: 'Jane'})
        }
      />
      </View>
      <View style={{ flexDirection:"row", justifyContent: 'center', size: 'lg' }}>
      <Button
        title="Community Posts"
        onPress={() =>
          navigation.navigate('Community', {name: 'Jane'})
        }
      />
      </View>
    </View>


    
  );
};

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const ShopScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const TipsScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const CommunityScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});