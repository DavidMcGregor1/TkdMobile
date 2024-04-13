import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavBarComponent = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.bottomNavBar}>
      <TouchableOpacity
        style={styles.navBarItem}
        onPress={() => navigateToScreen("Home")}
      >
        <Text style={styles.navBarText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarItem}
        onPress={() => navigateToScreen("TerminologyPage")}
      >
        <Text style={styles.navBarText}>Terminology</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navBarItem}
        onPress={() => navigateToScreen("AccountPage")}
      >
        <Text style={styles.navBarText}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#39B54A",
    paddingVertical: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navBarText: {
    color: "#000",
    fontSize: 15.5,
  },
});

export default NavBarComponent;
