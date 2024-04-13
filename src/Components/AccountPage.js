import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountPage = ({ sessionsAttended }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Sessions attended: {sessionsAttended}</Text>
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

export default AccountPage;
