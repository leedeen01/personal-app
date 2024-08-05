import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/styles";
import { FIREBASE_AUTH } from "../../firebase";

const HomePage = () => {
  const handleSignOut = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      console.log("Sign out successful");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await FIREBASE_AUTH.currentUser?.delete();
      console.log("Account deleted successfully");
    } catch (error) {
      console.error("Account deletion error:", error);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>HomePage</Text>
        <View style={styles.separator} />
        <Button title="Sign Out" onPress={handleSignOut} />
        <Button
          title="Delete Account"
          onPress={handleDeleteAccount}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default HomePage;
