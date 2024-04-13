import React from "react";

import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  Image,
  Alert,
  Button,
} from "react-native";
import ButtonsOnHome from "./ButtonsOnHome";
import HomeLogoImageComponent from "./HomeLogoImageComponent";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <HomeLogoImageComponent />

      <View style={styles.buttonsContainer}>
        <ButtonsOnHome title={"Training"} />
        <ButtonsOnHome title={"Events"} />
        <ButtonsOnHome title={"Notifications"} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 16,
    backgroundColor: "#292529",
  },
  buttonsContainer: {
    justifyContent: "center",
  },
});

export default HomePage;
