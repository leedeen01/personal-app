import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerTitle: "Home Page", title: "Home"}}/>
      <Tabs.Screen name="todayTask" options={{headerTitle: "Today Page", title: "Today"}}/>
    </Tabs>
  );
};

export default TabsLayout;
