import React from "react";
import { GestureResponderEvent } from "react-native";
import { Button } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

export default function NativeButton({
  onPress,
  title,
  icon,
  mode = "contained-tonal",
  disabled,
}: {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  icon?: IconSource;
  mode?: "contained-tonal" | "outlined" | "text" | "contained" | "elevated";
  disabled?: boolean;
}) {
  return (
    <Button mode={mode} icon={icon} onPress={onPress} disabled={disabled}>
      {title}
    </Button>
    // <Pressable style={styles.button} onPress={onPress}>
    //   <Text style={styles.text}>{title}</Text>
    // </Pressable>
  );
}
// const styles = StyleSheet.create({
//   button: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     elevation: 3,
//     backgroundColor: "black",
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: "bold",
//     letterSpacing: 0.25,
//     color: "white",
//   },
// });
