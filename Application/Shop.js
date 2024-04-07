import React, { useState } from 'react';
import { StatusBar, Modal, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ImageBackground, Linking, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Custom Header component
const Title = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>SHOP</Text>
    </View>
  );
};

const Bottom = () => {
  return (
    <View style={styles.bottom}>
      <Text style={styles.headerTitle}></Text>
    </View>
  );
};

const Avatar = () => {
  return (
    <View style={styles.categoryWrapper}>
      <Image source={require('./assets/hiking.png')} style={styles.image} />
    </View>
  );
};

const Category = ({ title }) => {
  return (
    <View style={styles.category}>
      <Text style={styles.categoryTitle}>{title}</Text>
    </View>
  );
};

const Item = ({ imageSource, itemName, onPress, avatarImage, link, description  }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.button} onPress={() => onPress(itemName, avatarImage, link, description)}>
        <ImageBackground source={imageSource} style={styles.buttonBackground}>
          <Text style={styles.buttonText}></Text>
        </ImageBackground>
      </TouchableOpacity>
      <Text style={styles.itemName}>{itemName}</Text>
    </View>
  );
};

const ButtonRow1 = ({ onPress }) => {
  return (
    <View style={styles.buttonRow}>
      <Item imageSource={require('./assets/COELLE SHELL JACKET.png')} itemName="COELLE SHELL JACKET" onPress={onPress} avatarImage={require('./assets/1.png')} 
      link="https://arcteryx.com/ca/en/shop/womens/coelle-shell-jacket?CMPID=ps%7Cshp%7Cstd%7Cgoogle%7CArc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN%7C%7C%7C151538539338-663122094952&utm_souce=&utm_medium=ps%7Cshp%7Cstd&utm_campaign=Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xRGQB92NW5LIyziiyJtrdsoujhdKZWRN-vrqpADgldJiSukxYKsVisaAiIbEALw_wcB"
      description="Ultralight GORE-TEX shell for spring and summer weather protection."/>
      <Item imageSource={require('./assets/LANA MERINO WOOL CREW NECK SHIRT LS.png')} itemName="LANA CREW NECK SHIRT" onPress={onPress} avatarImage={require('./assets/2.png')}
      link="https://arcteryx.com/ca/en/shop/womens/lana-merino-wool-crew-neck-shirt-ls?CMPID=ps|shp|std|google|Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN|||151538539338-663122094952&utm_souce=&utm_medium=ps|shp|std&utm_campaign=Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xQTVjP-Gh4uOCTO3LnJX7emuO1aO7MmaLd_ccgMXNl3F2hskZ4HnusaAulWEALw_wcB"
      description="Merino-blend crew for performance and comfort across a wide range of activities."/>
      
      <Item imageSource={require('./assets/SILENE CREW SHIRT.png')} itemName="SILENE CREW SHIRT" onPress={onPress} avatarImage={require('./assets/3.png')}
      link="https://arcteryx.com/ca/en/shop/womens/silene-crew-shirt-ss?cmpid=pm|mult|perf|google|Arc%27teryx_Google-PMAX_Non-Brand_S23_Performance_BOF_R:NAM_C:CA_L:EN|All_Products||{ad_id}&utm_source=google&utm_medium=pm|mult|perf&utm_campaign=Arc%27teryx_Google-PMAX_Non-Brand_S23_Performance_BOF_R:NAM_C:CA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xQpAOxESsRAAboZGwl9Vztd9RAVj_-7RJaSdLVY47vnTvqYMmmhbrwaAoeHEALw_wcB"
      description="Performance Phasic FL top designed for unrestricted comfort while climbing."/>
    </View>
  );
};

const ButtonRow2 = ({ onPress }) => { 
  return ( 
    <View style={styles.buttonRow}>
      <Item imageSource={require('./assets/ESSENT HIGH-RISE UTILITY LEGGING.png')} itemName="ESSENT UTILITY LEGGING" onPress={onPress} avatarImage={require('./assets/4.png')}
      link="https://arcteryx.com/ca/en/shop/womens/essent-high-rise-utility-legging-26?CMPID=ps|shp|std|google|Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN|||151538539338-663122094952&utm_souce=&utm_medium=ps|shp|std&utm_campaign=Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xRjkqlmnOY0Cdn7iYp_JWkdh4iS81PnyIk4Cf1JugArq4eyWZcyEgIaAjryEALw_wcB"
      desription="Stretch, breathability, and pockets in a versatile tight for high-output activities."/>
      <Item imageSource={require('./assets/GAMMA HYBRID PANT.png')} itemName="GAMMA HYBRID PANT" onPress={onPress} avatarImage={require('./assets/5.png')}
      link="https://arcteryx.com/ca/en/shop/womens/gamma-hybrid-pant?CMPID=ps|shp|std|google|Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN|||151538539338-663122094952&utm_souce=&utm_medium=ps|shp|std&utm_campaign=Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xTk48Juet1njOJXKxMm1vLBzY1PW7FRXWIl8_To4VvKqRQVdmua3REaAlO9EALw_wcB"
      description="Enhanced mobility and secure storage in a light, durable, breathable hiking pant."/>
      <Item imageSource={require('./assets/NORVAN WINDSHELL PANT.png')} itemName="NORVAN WINDSHELL PANT" onPress={onPress} avatarImage={require('./assets/6.png')}
      link="https://arcteryx.com/ca/en/shop/womens/norvan-windshell-pant?CMPID=ps|shp|std|google|Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN|||151538539338-663122094952&utm_souce=&utm_medium=ps|shp|std&utm_campaign=Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xQgo9GMAUHKwaco93VpNhsbA01eZnGQP7S6qgZ9p5LGOCjn736r5TEaAiaeEALw_wcB"
      description="Ultra-minimalist windshell pant for protection on extended trail runs."/>
    </View>
  );
};

const ButtonRow3 = ({ onPress }) => { 
  return ( 
    <View style={styles.buttonRow}>
      <Item imageSource={require('./assets/MANTIS BACKPACK.png')} itemName="MANTIS BACKPACK" onPress={onPress} avatarImage={require('./assets/7.png')}
      link="https://arcteryx.com/ca/en/shop/mantis-26-backpack?CMPID=ps|shp|std|google|Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN|||151538539338-663122094952&utm_souce=&utm_medium=ps|shp|std&utm_campaign=Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xSlk174_zOA6dEhmSHpZdEQhrNE17WUeriVZjLWssfDd506iz0Vs78aAvq1EALw_wcB"
      description="Comfortable, streamlined, highly versatile 30L pack made with recycled materials."/>
      <Item imageSource={require('./assets/NORVAN LD 3 GTX SHOE.png')} itemName="NORVAN LD 3 GTX SHOE" onPress={onPress} avatarImage={require('./assets/8.png')}
      link="https://arcteryx.com/ca/en/shop/womens/norvan-ld-3-gtx-shoe?CMPID=ps|shp|std|google|Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN|||151538539338-663122094952&utm_souce=&utm_medium=ps|shp|std&utm_campaign=Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xR1QXh94y-fMVMqbPFmDZuTxZm9aQjMvGcDHMw-dx6s_ShaE5xBmO8aApr-EALw_wcB"
      description="Lightweight, supportive GORE-TEX shoe for lasting comfort on extended trail runs."/>
      <Item imageSource={require('./assets/BIRD WORD TRUCKER CURVED HAT.png')} itemName="BIRD WORD TRUCKER HAT" onPress={onPress} avatarImage={require('./assets/9.png')}
      link="https://arcteryx.com/ca/en/shop/bird-word-trucker-curved-hat?CMPID=ps|shp|std|google|Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN|||151538539338-663122094952&utm_souce=&utm_medium=ps|shp|std&utm_campaign=Arc%27teryx_Google-Standard-Shopping_S23_Performance_BOF_R:NAM_C:CA_L:EN&gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xR7saAmFegGS9Jt84IdBWoHPRRmZwKj-bYXOh32LyQEihYrIS0AlJoaAit3EALw_wcB"
      description="Curved-brim trucker made with light, highly breathable performance materials."/>
      </View>
  );
};

const OverlayPage = ({ visible, onClose, overlayText, avatarImage, link, description }) => {
  const handleReal = () => {
    Linking.openURL(link);
  };

  const handlePurchase = () => {
    Alert.alert('Purchase Successful', 'Your purchase was successful!', [
      { text: 'OK', onPress: onClose }
      
    ]);
  };

  return (
    <LinearGradient
    colors={['#c9a5c3', '#37ab9f', '#40436e']}
    style={styles.gradientBackground}
  >
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlayExit}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.exit} >X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.overlayContainer}>
      <Text style={styles.overlayText}>{overlayText}</Text>
        <Image source={avatarImage} style={styles.overlayImage} />
        <Text style={styles.priceName}>$20</Text>
        <Text style={styles.priceName}>{description}</Text>
        <TouchableOpacity style={styles.purchaseButton}  onPress={handlePurchase}>
          <Text style={styles.purchaseButton} > PURCHASE </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.purchaseButton} onPress={handleReal}>
          <Text style={styles.purchaseButton} > CHECK OUT THE REAL ITEM </Text>
        </TouchableOpacity>
      </View>
    </Modal>
    </LinearGradient>
  );
};

export default function Shop() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayText, setOverlayText] = useState('');
  const [overlayImage, setOverlayImage] = useState('');
  const [overlayLink, setOverlayLink] = useState('');
  const [overlayDescription, setOverlayDescritpion] = useState('');

  const openOverlay = (text, image, link, description) => {
    setOverlayVisible(true);
    setOverlayText(text);
    setOverlayImage(image);
    setOverlayLink(link);
    setOverlayDescritpion(description);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <LinearGradient
      colors={['#c9a5c3', '#37ab9f', '#40436e']}
      style={styles.gradientBackground}
    >
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Avatar />
        <View style={styles.categoryWrapper}>
          <Category title="Tops" />
        </View>
        <View style={styles.categoryWrapper}>
          <ButtonRow1 onPress={openOverlay} />
        </View>
        <View style={styles.categoryWrapper}>
          <Category title="Bottoms" />
        </View>
        <View style={styles.categoryWrapper}>
          <ButtonRow2 onPress={openOverlay} />
        </View>
        <View style={styles.categoryWrapper}>
          <Category title="Accessories" />
        </View>
        <View style={styles.categoryWrapper}>
          <ButtonRow3 onPress={openOverlay} />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
      <OverlayPage visible={overlayVisible} onClose={closeOverlay} overlayText={overlayText} avatarImage={overlayImage} link={overlayLink} description={overlayDescription}/>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignContent: 'center',
  },
  header: {
    backgroundColor: 'black',
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    backgroundColor: 'black',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 30,
    // fontWeight: 'bold',
    color: 'white',
  },
  categoryWrapper: {
    // backgroundColor: '#fff',
    opacity: '50%',
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 50,
    overflow: 'hidden',
  },
  category: {
    backgroundColor: '#273b47',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    width: 80,
    height: 100,
  },
  buttonBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  purchaseButton: {
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
    paddingVertical: 10, 
    paddingHorizontal: 10,
    justifyContent: 'space-around', 
    borderRadius: 15,
    fontWeight: 'bold',
  },
  pucahaseButtonBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemName: {
    color: 'black',
    width: 80,
    fontSize: 12,
    alignItems: 'center',
  },
  priceName: {
    color: 'grey',
    fontSize: 20,
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'space-evenly',
    
  },
  overlayText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  overlayExit: {
    flex: 0.1,
    // backgroundColor: 'rgba(0, 0, 0, 0.0)',
    paddingLeft: 20, 
    paddingTop: 30,
    height: 10,
    justifyContent: 'top',
  },
  exit: { 
    justifyContent: 'top', 
    alignContent: 'left',
    fontWeight: 'bold',
    fontSize: 50,
  },
  overlayImage: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
});