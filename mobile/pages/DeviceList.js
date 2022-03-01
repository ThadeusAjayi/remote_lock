import React, { useState, useEffect } from "react";
import { FlatList, TextInput, StyleSheet } from "react-native";
import DeviceCard from "../components/DeviceCard";
import { fetchDevices } from "lib/api";

function DeviceList() {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    fetchDevices("").then((res) => setDevices(res.data));
  }, []);

  const changeDeviceStatus = (deviceId) => {
    let updateDevices = devices.map((device) => {
      if (device.id == deviceId) {
        device.attributes.state =
          device.attributes.state == "unlocked" ? "locked" : "unlocked";
      }
      return device;
    });
    setDevices(updateDevices);
  };

  const onChangeText = (text) => {
    fetchDevices(text).then((res) => setDevices(res.data));
  };

  return (
    <>
      <TextInput
        onChangeText={onChangeText}
        style={styles.searchInput}
        placeholder={"Search devices"}
      />
      <FlatList
        style={styles.list}
        data={devices}
        renderItem={({ item }) => (
          <DeviceCard item={item} onValueChange={changeDeviceStatus} />
        )}
        keyExtractor={(x) => x.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#EEEEEE",
    padding: 3,
  },
  searchInput: {
    backgroundColor: "white",
    marginHorizontal: 13,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 4,
  },
});

export default DeviceList;
