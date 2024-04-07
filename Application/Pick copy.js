import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5
  },
  buttonGrad: {
    height: 50,
    width: 150,
    borderRadius: 5,
    position: 'absolute',
    bottom: 5,
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
  },
  buttonParent: {
    height: 50,
    width: 150,
    borderRadius: 10,
    backgroundColor: '#024e51',
  },
  buttonTextContainer: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
  },
  boldText: {
    fontFamily: 'CustomFont-Bold', 
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  }
});

function SelectModeScreenSmall({ buttonTitle, onPress}) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.buttonParent}>
            <LinearGradient
              colors={['#5be9aa', '#09949d']}
              style={styles.buttonGrad}
            >
              <View style={styles.buttonTextContainer}>
                <Text style={styles.boldText}>{buttonTitle}</Text>
              
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

export default SelectModeScreenSmall;
