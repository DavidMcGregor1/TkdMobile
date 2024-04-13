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

const RawLogoImage = () => {
  return (
    <View style={styles.topContainer}>
      <Image
        style={styles.imageLogo}
        source={require("../assets/logo_190x.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
  },
  //   imageLogo: {
  //     marginTop: 20,
  //   },
  imageLogo: {
    marginBottom: 0,
    marginTop: 10,
  },
});

export default RawLogoImage;
