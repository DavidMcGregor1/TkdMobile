import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ScannedSession = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>hello</Text>
      </View>
      {/* <Text>Ere</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScannedSession;
