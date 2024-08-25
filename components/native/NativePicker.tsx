import React from "react";
import RNPickerSelect from "react-native-picker-select";

export interface NativePickerProps {
  items: { label: string; value: string }[];
  onValueChange: (value: string) => void;
}

export default function NativePicker({
  items,
  onValueChange,
}: NativePickerProps) {
  return <RNPickerSelect onValueChange={onValueChange} items={items} />;
}
