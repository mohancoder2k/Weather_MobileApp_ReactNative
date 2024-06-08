import React from 'react';
import { View, Text, ImageBackground, Dimensions, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';


const weather = require('../assets/images/weather.jpg');
const user = require('../assets/images/user.jpg')


const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export default function About() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={weather}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
      >
        {/* Semi-transparent overlay */}
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Image source={user} style={styles.profileImage} />
            <Text style={styles.title}>About Me</Text>
            <Text style={styles.description}>
              Hi, This is Mohan, I am a professional developer from Puducherry with experience in building mobile and web applications. I am passionate about coding and always eager to learn new technologies.
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/mohan-sarady-164321251/')}>
              <Text style={styles.link}>LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/mohancoder2k')}>
              <Text style={styles.link}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'cover', 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: '#1DA1F2',
    marginVertical: 5,
  },
});
