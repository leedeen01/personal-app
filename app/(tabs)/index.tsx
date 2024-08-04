import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>

    <View>
      <Text>HomePage</Text>
    </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomePage;
