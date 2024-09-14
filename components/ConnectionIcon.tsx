import React from "react";
import { StyleSheet } from "react-native";
import { Badge } from "react-native-paper";
import { ConnectionEnum } from "../constants/TFL/connectionEnum";
import { connections } from "../constants/TFL/connections";

export default function ConnectionIcon({
  connectionName,
  large,
}: {
  connectionName: ConnectionEnum;
  large?: boolean;
}) {
  const connection = connections[connectionName];

  const style = styles(connection);

  return (
    <Badge size={large ? 30 : 20} style={large ? style.large : style.small}>
      {connection.name}
    </Badge>
  );
  if (!connection.icon) {
    return null;
  }
  const Icon = connection.icon;
  console.log(connection.icon);
  return <Icon />;
}

const styles = (connection: Connection) =>
  StyleSheet.create({
    small: {
      backgroundColor: connection.color,
      paddingLeft: 5,
      paddingRight: 5,
      borderRadius: 5,
    },
    large: {
      backgroundColor: connection.color,
      fontSize: 16,
      paddingVertical: 20,
      height: "auto",
      paddingHorizontal: 20,
      borderRadius: 10,
    },
  });
