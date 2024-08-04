import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { globalStyles } from "../styles/styles";
import {
  header,
  showMore,
  title,
  circleButton,
} from "../styles/todayTask";

const todayTask = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={title.container}>
        <Icon name="bars" size={24} />
        <Text>Today</Text>
        <Icon name="ellipsis-h" size={24} color="black" />
      </View>
      <View style={header.container}>
        <Text>Today</Text>
        <Pressable style={showMore.container}>
          <Icon name="chevron-down" size={16} />
        </Pressable>
      </View>


      <Pressable style={circleButton.container}>
        <Icon name="plus" size={24} style={circleButton.icon} />
      </Pressable>
    </SafeAreaView>
  );
};

export default todayTask;
