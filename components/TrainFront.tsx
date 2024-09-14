import React from "react";
import { StyleSheet, View } from "react-native";

export default function TrainFront() {
  return (
    <View style={styles.container}>
      <View style={styles.pentagonContainer}>
        <View style={[styles.pentagon, styles.leftSide]} />
        <View style={[styles.pentagon, styles.rightSide]} />
        <View style={styles.bottom} />
        <View style={styles.bottom} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  pentagonContainer: {
    width: 33, // Half screen width
    height: 33, // Maintain aspect ratio
    justifyContent: "center",
    alignItems: "center",
  },
  pentagon: {
    width: 0,
    height: 0,
  },
  leftSide: {
    borderTopWidth: 33,
    borderTopColor: "transparent",
    borderLeftWidth: 33,
    borderLeftColor: "transparent",
    borderRightWidth: 33,
    borderBottomWidth: 33,
    borderBottomColor: "transparent",
    transform: [{ rotate: "45deg" }],
    left: 0,
    top: -5,
  },
  rightSide: {
    borderTopWidth: 33,
    borderTopColor: "transparent",
    borderLeftWidth: 33,
    borderRightWidth: 33,
    borderRightColor: "transparent",
    borderBottomWidth: 33,
    borderBottomColor: "transparent",
    transform: [{ rotate: "-45deg" }],
    right: 0,
    top: -5,
  },
  bottom: {
    bottom: 0,
    width: 33,
    height: 33,
    backgroundColor: "rgb(0, 66, 128)",
  },
});
