import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import DeviceCard from "../components/DeviceCard";
import { fetchDevices } from "lib/api";

function DeviceList() {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    fetchDevices().then((res) => setDevices(res.data));
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

  return (
    <View style={{ backgroundColor: "red" }}>
      <FlatList
        style={{
          backgroundColor: "#EEEEEE",
          padding: 3,
        }}
        data={devices}
        renderItem={({ item }) => (
          <DeviceCard item={item} onValueChange={changeDeviceStatus} />
        )}
        keyExtractor={(x) => x.id}
      />
    </View>
  );
}

export default DeviceList;
