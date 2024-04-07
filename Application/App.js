import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import * as React from 'react';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button as ButtonTwo, Card, Header, Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();
const onPressShop = () => navigation.navigate('Shop');

const users = [
  {
    name: 'brynn',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    title: 'title',
    img: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    captions: 'captions',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    title: 'title',
    img: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    captions: 'captions',
  },
  {
    name: 'jsa',
    avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
    title: 'title',
    img: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    captions: 'captions',
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    title: 'title',
    img: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    captions: 'captions',
  },
  {
    name: 'andy vitale',
    avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
    title: 'title',
    img: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    captions: 'captions',
  },
  {
    name: 'katy friedson',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    title: 'title',
    img: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    captions: 'captions',
  },
  ];





export default function App() {
  const [visible, setVisible] = React.useState(true);
  const [index, setIndex] = React.useState(0);

  return (
    // <SafeAreaProvider>
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
    // </SafeAreaProvider>
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







const CommunityScreen = ({navigation, route}) => {
  return (
  <SafeAreaProvider>
  <View >
    
    {/*uncomment the following code to display header  */}
  {/* <Header
  //style={styles.container}
  backgroundImageStyle={{}}
  barStyle="default"
  centerComponent={{
    text: "Hiking Buddy",
    style: { color: "#fff", 
    fontSize: 20,
    fontWeight: 'bold',
    //textAlign:'center',
    textAlignVertical: 'bottom'},
  }}
  centerContainerStyle={{}}
  containerStyle={{ height:100}}
  leftContainerStyle={{}}
  linearGradientProps={{}}
  placement="center"
  rightContainerStyle={{}}
  statusBarProps={{}}
/> */}

  <ButtonTwo
          title="POST"
          icon={{
            name: 'plus',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 20 }}
          titleStyle={{ fontWeight: 'bold' }}
          buttonStyle={{
            backgroundColor: 'rgba(199, 43, 98, 1)',
            borderColor: 'transparent',
            width: "70%",
            borderWidth: 0,
            borderRadius: 30,
            placement: 'right'
          }}
          containerStyle={{
            width: "auto",
            //placement: 'right',
            marginVertical: 20,
            marginEnd: -30,
            alignSelf: 'flex-end'
          }}
        />


  <ScrollView style={{ height: '70%' }}>
 

    <View styles={styles.container} >
    {users.map((u, i) => {
        return (
          
          <Card key={i}>
      <Card.Title>{u.title}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{uri: u.img}}
      />
      <Text style={{ marginBottom: 10 }}>
        {u.captions}
      </Text>
      <ButtonTwo
        icon={
          <Icon
            name="arrow-forward"
            color="#ffffff"
            iconStyle={{ marginRight: 10 }}
          />
        }
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="Details"
        iconPosition='right'
      />
    </Card>
        );
      })}
      </View>

      

  </ScrollView>  

  <ButtonTwo
  title="POST"
  icon={{
    name: 'plus',
    type: 'font-awesome',
    size: 15,
    color: 'white',
  }}
  //iconRight
  //iconContainerStyle={{ marginLeft: 20 }}
  titleStyle={{ fontWeight: 'bold' }}
  buttonStyle={{
    backgroundColor: 'rgba(199, 43, 98, 1)',
    borderColor: 'transparent',
    //width: "70%",
    borderWidth: 0,
    borderRadius: 30,
    //placement: 'right'
  }}
  containerStyle={{
    //width: '',
    //placement: 'right',
    marginVertical: 20,
    //marginEnd: -30,
    //alignSelf: 'flex-end'
  }}
  />



</View>
</SafeAreaProvider>
  );
};

const TipsScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const ShopScreen = ({navigation, route}) => {
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
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  }
});