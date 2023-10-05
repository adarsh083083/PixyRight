import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const BackgroundImage = ({ source, children }) => {
  return (
    <ImageBackground source={source} style={styles.backgroundImage}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default BackgroundImage;
