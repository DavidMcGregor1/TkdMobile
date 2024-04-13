import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TrainingDetailsScreen = () => {
  const handleHideoutPress = () => {
    Linking.openURL("https://maps.app.goo.gl/nHPmKZRbE4v8N3QS7");
  };

  const handleStWerPress = () => {
    Linking.openURL("https://maps.app.goo.gl/5jU7YMe7b2DzoBfr7");
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#292529" }]}>
      <View style={styles.textContainers}>
        <Text style={styles.text}>
          Training sessions are run throughout the week and all students are
          welcome to attend any of the sessions that they can make.
        </Text>
        <Text style={styles.text}>
          Sessions that are intended for untions run at an earlier time and are
          aimed at our younger students at the lower grades
        </Text>

        <Text style={styles.text}>
          Beginners are welcome at any of the club sessions and you will get
          your first month of training for free!
        </Text>
      </View>

      {/* THE HIDEOUT */}

      <View style={styles.component}>
        <TouchableWithoutFeedback onPress={() => handleHideoutPress()}>
          <Text style={styles.title}>The Hideout</Text>
        </TouchableWithoutFeedback>
        <View style={styles.detailsContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.dateTimeText}>Sunday</Text>
            <Text style={styles.dateTimeText}>11:15am - 12:15am</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.detailsText}>The hideout</Text>
            <Text style={styles.detailsText}>2 White Street,</Text>
            <Text style={styles.detailsText}>St Judes, Bristol</Text>
            <Text style={styles.detailsText}>BS5 0TS</Text>
          </View>
        </View>
      </View>

      <View style={styles.component}>
        <TouchableWithoutFeedback onPress={() => handleStWerPress()}>
          <Text style={styles.title}>St Werburghs Primary</Text>
        </TouchableWithoutFeedback>
        <View style={styles.detailsContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.dateTimeText}>Tuesday</Text>
            <Text style={styles.dateTimeText}>5:30pm - 6:40pm</Text>
            <Text style={styles.dateTimeText}>7:00pm - 8:30pm</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.detailsText}>Thursday</Text>
            <Text style={styles.detailsText}>5:30pm - 6:40pm</Text>
            <Text style={styles.detailsText}>7:00pm - 8:30pm</Text>
          </View>
        </View>
      </View>
      <View style={styles.stWerContainer}>
        <Text style={styles.detailsText}>St Werbughs Primary School</Text>
        <Text style={styles.detailsText}>Mogg Street</Text>
        <Text style={styles.detailsText}>St Werburghs</Text>
        <Text style={styles.detailsText}>BS2 9UB</Text>
      </View>
      {/* St Werburghs */}
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
  component: {
    alignItems: "center",
    marginBottom: 15,
  },
  addressContainer: {},
  stWerContainer: {
    marginBottom: 35,
  },
  textContainers: {
    padding: 15,
    flex: 0.55,
    justifyContent: "space-around",
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  textBlock: {
    marginBottom: 10,
  },
  detailsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
  title: {
    color: "white",
    textDecorationLine: "underline",
    fontSize: 20,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "column",
    marginBottom: 10,
  },
  dateTimeText: {
    color: "white",
    marginRight: 20,
  },
  detailsText: {
    color: "white",
  },
});

export default TrainingDetailsScreen;
