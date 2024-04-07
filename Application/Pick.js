import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGrad: {
    height: 50,
    width: 200,
    borderRadius: 10,
    position: 'absolute',
    bottom: 5,
  },
  buttonParent: {
    height: 50,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#024e51',
  },
});

function SelectModeScreen({ buttonTitle }) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => console.log('btn pressed')}>
          <View style={styles.buttonParent}>
            <LinearGradient
              colors={['#5be9aa', '#09949d']}
              style={styles.buttonGrad}
            >
              <Text style={styles.buttonText}>{buttonTitle}</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    );
}

export default SelectModeScreen;