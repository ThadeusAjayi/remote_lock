import React from "react";
import { View, StyleSheet, Image, Text, Switch } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 5,
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

const statusColors = { current: "#C5F6A7", upcoming: "#F4F6A7" };

function UserStatus({ status }) {
  const styles = { backgroundColor: statusColors[status] };
  return <Text style={styles}>{status}</Text>;
}

function UserCard({ item: { attributes } }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "http://placekitten.com/g/30/30",
        }}
        style={{
          height: 60,
          width: 60,
          borderRadius: 30,
          overflow: "hidden",
          marginRight: 10,
        }}
      />
      <View style={{ flex: 1 }}>
        <Text>Home</Text>
        <Text>BG</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Switch />
          <Text>BG</Text>
        </View>
      </View>
    </View>
  );
}
export default UserCard;
