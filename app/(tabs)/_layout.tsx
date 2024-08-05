import { router, Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { getAuth } from "firebase/auth";
const TabsLayout = () => {
  
  getAuth().onAuthStateChanged((user) => {
    if (!user) {
      router.replace("/");
    }
  });

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Icon 
                name="home" 
                size={size} 
                color={focused ? "#4682B4" : "grey"} // Change color based on focus
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="todayTask"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <Icon 
                name="tasks" 
                size={size} 
                color={focused ? "#4682B4" : "grey"} // Change color based on focus
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};


export default TabsLayout;
