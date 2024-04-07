// import { StatusBar } from 'expo-status-bar';
// import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
// import * as React from 'react';
// import {useNavigation, NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { Button as ButtonTwo, Card, Header, Icon } from '@rneui/themed';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Button, Card, Header, Icon } from '@rneui/themed';

const users = [
  {
    name: 'brynn',
    avatar: 'https://img.freepik.com/free-vector/cartoon-style-happy-young-woman-hiking-out-side-home-stay-healthy_1150-37497.jpg',
    title: 'Hiking Tips for Newbies!',
    img: 'https://img.freepik.com/free-vector/cartoon-style-happy-young-woman-hiking-out-side-home-stay-healthy_1150-37497.jpg',
    captions: 'Interested in hiking but don\'t know where to start? Don\'t miss out on this MUST-READ guide for newcomers!',
  },
  {
    name: 'thot leader',
    avatar:
      'https://images.pexes.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    title: '\"What to bring? What to do?\" -- The Ultimate Hiking Checklist',
    img: 'https://www.rei.com/dam/day_hiking_checklist_lg3.jpg?t=ea16by9xs',
    captions: 'Whether it\'s your 3rd or 30th hiking trip, this checklist can help you plan your adventure for an exciting, memorable experience.',
  },
  {
    name: 'jsa',
    avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
    title: '\"Why Hike When I Could Be A Couch Potato™️?\"',
    img: 'https://www.vitacost.com/blog/wp-content/uploads/2017/04/Hiking-for-Beginners-e1492545685886.jpg',
    captions: 'Need another reason to touch grass today? Science proves that hiking regularly helps you build stronger muscles and bones, decreases risk of respiratory problems, and greatly improves your cardiovascular health.',
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    title: '\"What Else Can I Do?\"',
    img: 'https://cdn.statically.io/img/awe365.com/wp-content/uploads/2018/07/Essential-walking-gear-for-hiking-holidays-Flickt-CC-image-from-Mt-Washington-by-jisoosong-1024x693.jpg?quality=100&f=auto',
    captions: 'And that\'s not just a Disney movie reference. If you love the intenseness of hiking, the breathtaking views of nature you see, and the vast variety of benefits to your health you get in the process, we guarantee you\'ll love these sports, too.',
  },
  {
    name: 'andy vitale',
    avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
    title: 'Best Hiking Food List',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkr21S0huReXDPZCr9BerHL-R_ymWf_ee6XW5bQO2SA&s',
    captions: 'Check out this list of healthy snacks that can keep you energized and well-fueled on a weekend hiking trip in the mountains.',
  },
  {
    name: 'katy friedson',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    title: 'Hike Smart, Hike Safe',
    img: 'https://www.tripsavvy.com/thmb/2BjF5YfQc9bGzWhBZhuY-ERg-sk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/DSC_4184-0c24323e672d4210ac1a36e77865401c.jpg',
    captions: 'You can never be too safe when on an adventure. Know how to watch out for environmental hazards and minimize injury to yourself in case of an emergency.',
  },
  ];

export default function Tips() {
  const [visible, setVisible] = React.useState(true);
  const [index, setIndex] = React.useState(0);

  return (
    

    <View >
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
    
      <Button
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
        {/* <View styles={styles.container} >
        <Card>
          <Card.Title>CARD WITH DIVIDER</Card.Title>
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ u: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>
        </View> */}

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
                <Button
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

      <Button
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






      {/* <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Recent"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="favorite"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="cart"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
      />
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
        <Text h1>Recent</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
        <Text h1>Favorite</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
        <Text h1>Cart</Text>
      </TabView.Item>
    </TabView> */}



    </View>
    

    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});