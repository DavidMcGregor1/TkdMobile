import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonsOnHome from "./ButtonsOnHome";
import RawLogoImage from "./RawLogoImage";

const TraningOptionsPage = () => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#292529" }]}>
      <RawLogoImage />
      <View style={styles.buttonsContainer}>
        <ButtonsOnHome title={"Log a session"} />
        <ButtonsOnHome title={"Training Details"} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    gap: -10,
    alignItems: "center",
  },
});

export default TraningOptionsPage;
