import React from "react";
import { View, StyleSheet, Image, Text, Switch } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
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
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    overflow: "hidden",
    marginRight: 20,
  },
  name: { fontWeight: "700", fontSize: 18 },
  lockState: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  model: {
    color: "#00000050",
  },
});

const stateColor = { locked: "red", unlocked: "green" };

function LockStatus({ status }) {
  const styles = { color: stateColor[status] };
  return <Text style={styles}>{status}</Text>;
}

function UserCard({
  item: {
    attributes: { name, model_number, state },
    id,
  },
  onValueChange,
}) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "http://placekitten.com/g/30/30",
        }}
        style={styles.image}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.model}>{model_number}</Text>
        <View style={styles.lockState}>
          <Switch
            value={state == "locked" ? true : false}
            onValueChange={() => onValueChange(id)}
          />
          <LockStatus status={state} />
        </View>
      </View>
    </View>
  );
}
export default UserCard;
