import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Platform } from "react-native";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Dashboard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    ...Platform.select({ android: { marginTop: StatusBar.currentHeight } }),
  },
});
