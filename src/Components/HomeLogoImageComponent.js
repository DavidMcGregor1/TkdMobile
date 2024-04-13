import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  Image,
  Alert,
} from "react-native";
import { useState } from "react";

const HomeLogoImageComponent = () => {
  return (
    <View style={styles.topContainer}>
      <Image
        style={styles.imageLogo}
        source={require("../assets/logo_190x.png")}
      />
      <Text style={styles.welcomeMessage}>Welcome!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
  },
  imageLogo: {
    marginTop: 20,
  },
  welcomeMessage: {
    marginBottom: 80,
    marginTop: 10,
    color: "#fff",
    fontSize: 24,
  },
});

export default HomeLogoImageComponent;
