// ButtonsOnHome.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ButtonsOnHome = ({ title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (title === "Training") {
      navigation.navigate("Training"); // Navigate to TrainingDetails screen
    } else if (title === "Events") {
      navigation.navigate("Events"); // Navigate to TrainingDetails screen
    } else if (title === "Training Details") {
      navigation.navigate("Training Details"); // Navigate to TrainingDetails screen
    } else if (title === "Log a session") {
      navigation.navigate("LogSession");
    } else if (title === "Notifications") {
      navigation.navigate("QrCodePage");
    }
    // Add more conditions for other buttons if needed
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 300,
    alignSelf: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default ButtonsOnHome;
