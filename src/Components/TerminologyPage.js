import React from "react";
import { View, StyleSheet, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { SafeAreaView } from "react-native-safe-area-context";

const TerminologyPage = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Ere</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TerminologyPage;
