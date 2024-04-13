import React from "react";
import { View, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { SafeAreaView } from "react-native-safe-area-context";

const QrCodePage = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <QRCode
          value="Hello, world!"
          size={200} // Set the size of the QR code
        />
      </View>
      <Text>Ere</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QrCodePage;
