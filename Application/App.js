import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Pressable, Image, Button, TouchableOpacity} from 'react-native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectModeScreen from './Pick';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import { Button as ButtonTwo, Card, Header, Icon, Input } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Shop from './Shop';
import Hike from './Hike';
import Tips from './Tips';
import Community from './Community';


const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hiker Buddy"
          component={HomeScreen}
          options={{ headerTitleAlign: 'center', title: 'Hiker Buddy' }}
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
        <Stack.Screen
          name="Hike"
          component={HikeScreen}
          options={{ headerTitleAlign: 'center', title: 'Plan Your Hike' }}
        />
        <Stack.Screen 
          name="New Post" 
          component={PostScreen}
          options={{headerTitleAlign: 'center', title: 'New Post'}} />
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
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Pressable
  onPress={() => navigation.navigate('Community', { name: 'Jane' })}
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
  <Text style={[styles.boldText, { color: 'white', marginLeft: 10 }]}>
    {'Hiker\nLevel 1'}
  </Text>
</Pressable>
<Image
    style={styles.setting}
    source={require('./assets/setting.png')}
  />

</View>
  <Image
    style={styles.avatar}
    source={require('./assets/1.png')}
  />
       
  <SelectModeScreen buttonTitle="Start Hike"  
    onPress={() => navigation.navigate('Hike', { name: 'Jane' })}
    imageSource={require('./assets/hike_icon.png')}/>

  <SelectModeScreen buttonTitle="Shop"  
    onPress={() => navigation.navigate('Shop', { name: 'Jane' })}
    imageSource={require('./assets/shop.png')}/>
      
  <SelectModeScreen buttonTitle="Tips"  
    onPress={() => navigation.navigate('Tips', { name: 'Jane' })}
    imageSource={require('./assets/tips.png')}/>

  <SelectModeScreen buttonTitle="Community"  
    onPress={() => navigation.navigate('Community', { name: 'Jane' })}
    imageSource={require('./assets/community.png')}/>
    </LinearGradient>
    </View>
  );
};

const ShopScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Shop/>
    </View>
  );
};

const HikeScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Hike/>
    </View>
  );
};

const TipsScreen = ({ route }) => {
  return (
    <View>
      <Tips/>
    </View>
  );
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

          onPress={() =>
            navigation.navigate('New Post', {name: 'Jane'})
          }
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

const PostScreen = ({navigation, route}) => {
  
//const [value, onChangeText] = React.useState('Caption');
  return (
  
  <View>
    
    <Input
      placeholder='Title'
      fontWeight='bold'
    />

    <Input
    
        editable={true}
        multiline={true}
        numberOfLines={4}
        height={270}
        //maxLength={40}
        placeholder='Captions'
        //value={value}
        
      />

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
      width: "100%",
      borderWidth: 0,
      borderRadius: 30,
      placement: 'center'
    }}
    containerStyle={{
      //width: "auto",
      //placement: 'right',
      marginVertical: 20,
      //marginEnd: -30,
      alignSelf: 'center'
    }}/>


  </View>)
}

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
});
