import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import HomeLogoImageComponent from "./Components/HomeLogoImageComponent";
import NavBarComponent from "./Components/NavBarComponent";
import HomePage from "./Components/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; // Import createStackNavigator
import TrainingDetailsScreen from "./Components/TraningDetailsScreen";
import EventsScreen from "./Components/EventsScreen";
import TraningOptionsPage from "./Components/TraningOptionsPage";
import LogSessionPage from "./Components/LogSessionPage";
import QRCode from "react-native-qrcode-svg";
import QrCodePage from "./Components/QrCodePage";
import ScannedSession from "./Components/ScannedSession";
import AccountPage from "./Components/AccountPage";
import TerminologyPage from "./Components/TerminologyPage";

export default function App() {
  const [sessionsAttended, setSessionsAttended] = useState(0);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              headerStyle: { backgroundColor: "#292529" }, // Remove border
              headerTitleStyle: {
                color: "#FFFFFF",
                borderBottomColor: "#292529",
              }, // Set border color to match background
            }}
          />
          <Stack.Screen
            name="Training Details"
            component={TrainingDetailsScreen}
            options={{
              headerStyle: { backgroundColor: "#292529" }, // Remove border
              headerTitleStyle: {
                color: "#FFFFFF",
                borderBottomColor: "#292529",
              }, // Set border color to match background
            }}
          />
          <Stack.Screen
            name="Training"
            component={TraningOptionsPage}
            options={{
              headerStyle: { backgroundColor: "#292529" }, // Remove border
              headerTitleStyle: {
                color: "#FFFFFF",
                borderBottomColor: "#292529",
              }, // Set border color to match background
            }}
          />
          <Stack.Screen
            name="Events"
            component={EventsScreen}
            options={{
              headerStyle: { backgroundColor: "#292529" }, // Remove border
              headerTitleStyle: {
                color: "#FFFFFF",
                borderBottomColor: "#292529",
              }, // Set border color to match background
            }}
          />
          <Stack.Screen
            name="ScannedSession"
            component={ScannedSession}
            options={{
              headerStyle: { backgroundColor: "#292529" }, // Remove border
              headerTitleStyle: {
                color: "#FFFFFF",
                borderBottomColor: "#292529",
              }, // Set border color to match background
            }}
          />
          <Stack.Screen
            name="AccountPage"
            options={{
              headerStyle: { backgroundColor: "#292529" }, // Remove border
              headerTitleStyle: {
                color: "#FFFFFF",
                borderBottomColor: "#292529",
              }, // Set border color to match background
            }}
          >
            {(props) => (
              <AccountPage {...props} sessionsAttended={sessionsAttended} />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="TerminologyPage"
            component={TerminologyPage}
            options={{
              headerStyle: { backgroundColor: "#292529" }, // Remove border
              headerTitleStyle: {
                color: "#FFFFFF",
                borderBottomColor: "#292529",
              }, // Set border color to match background
            }}
          />
          <Stack.Screen
            name="LogSession"
            options={{
              headerStyle: { backgroundColor: "#292529" }, // Remove border
              headerTitleStyle: {
                color: "#FFFFFF",
                borderBottomColor: "#292529",
              }, // Set border color to match background
            }}
          >
            {(props) => (
              <LogSessionPage
                {...props}
                onSessionLogged={() => setSessionsAttended((prev) => prev + 1)}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
        <StatusBar style="auto" />
        <NavBarComponent />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292529",
  },
});
