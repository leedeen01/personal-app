import { StyleSheet } from "react-native";

export const title = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
});

export const header = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 16,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 8,
  },
});

export const showMore = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
});

export const circleButton = StyleSheet.create({
    container: {
      width: 50,
      height: 50,
      borderRadius: 25, // Makes it circular
      backgroundColor: '#007BFF', // Choose a color for your circle
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: '5%',
      right: '10%',
    },
    icon: {
      color: '#FFF', // White color for the icon
    },
  });

