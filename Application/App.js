import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Button, Card, Header, Icon } from '@rneui/themed';

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
    

    <View >
      <Header
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
    />
    
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
