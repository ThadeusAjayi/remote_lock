import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DeviceList from "../pages/DeviceList";
import UserList from "../pages/UserList";

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Devices" component={DeviceList} />
        <Tab.Screen name="Users" component={UserList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
