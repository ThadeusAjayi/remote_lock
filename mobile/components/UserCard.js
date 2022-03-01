import moment from "moment";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

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
  name: { fontWeight: "700", fontSize: 18, marginVertical: 5 },
  time: { fontWeight: "600", fontSize: 16, color: "#00000070" },
});

const formatTime = (time) => moment(time).format("MMM DD hh:mm");

function UserStartEndTime({ starts_at, ends_at, device_time_zone }) {
  return (
    <Text style={styles.time}>
      {formatTime(starts_at)} - {formatTime(ends_at)}
    </Text>
  );
}

const statusColors = { current: "#C5F6A7", upcoming: "#F4F6A7" };

function UserStatus({ status }) {
  const styles = {
    backgroundColor: statusColors[status],
    alignSelf: "flex-end",
    borderRadius: 10,
    padding: 5,
    overflow: "hidden",
    fontWeight: "bold",
    marginTop: 10,
  };
  return <Text style={styles}>{status?.toUpperCase()}</Text>;
}

function UserInfo({
  name,
  email,
  status,
  starts_at,
  ends_at,
  device_time_zone,
}) {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.name}>{name}</Text>
      <Text style={{ color: "#00000050" }}>{email}</Text>
      <UserStartEndTime
        starts_at={starts_at}
        ends_at={ends_at}
        device_time_zone={device_time_zone}
      />
      <UserStatus status={status} />
    </View>
  );
}

function UserCard({ item: { attributes } }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "http://placekitten.com/g/30/30",
        }}
        style={styles.image}
      />
      <UserInfo {...attributes} />
    </View>
  );
}
export default UserCard;
