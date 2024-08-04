import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';

const todayTask = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Today</Text>
      </View>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default todayTask;
