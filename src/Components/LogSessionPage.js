import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

export default function LogSessionPage({ onSessionLogged }) {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(false);
  const [scanData, setScanData] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (scanData) {
      const timer = setTimeout(() => {
        navigation.navigate("Home");
      }, 1200); // Delay navigation for 1 second
      return () => clearTimeout(timer);
    }
  }, [scanData]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`);
    onSessionLogged(); // Notify the parent component that a session is logged
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
      />
      {scanData && (
        <View style={styles.sessionLoggedContainer}>
          <Text style={styles.sessionLoggedText}>
            Session logged, thank you
          </Text>
          {/* <Button title="Close" onPress={() => navigation.navigate("Home")} /> */}
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sessionLoggedContainer: {
    // position: "absolute",
    // top: 50,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 5,
  },
  sessionLoggedText: {
    fontSize: 15,
    // fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },
});
