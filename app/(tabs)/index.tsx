import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/styles";

const HomePage = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View><Text>HomePage</Text></View>
    </SafeAreaView>

  );
};


export default HomePage;
