import { useState } from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { stations } from "../constants/TFL/stations";
import { StopEnum } from "../constants/TFL/stopEnum";
import ConnectionIcon from "./ConnectionIcon";
import StationDetails from "./StationDetails";

const Icons = styled(View)`
  display: flex;
  gap: 1px;
`;

export default function StationCard({ stop }: { stop: StopEnum }) {
  const [expanded, setExpanded] = useState(false);
  // const [animation] = useState(new Animated.Value(0));

  const onPress = () => {
    setExpanded((expanded) => !expanded);
    // Animated.timing(animation, {
    //   toValue: expanded ? 0 : 1,
    //   duration: 300,
    //   useNativeDriver: true,
    // }).start();
  };

  const closeDetails = () => {
    // Animated.timing(animation, {
    //   toValue: 0,
    //   duration: 300,
    //   useNativeDriver: true,
    // }).start(() => {
    // });
    setExpanded(false);
  };

  // const translateY = animation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, -200], // Adjust the value as per your requirement
  // });

  const station = stations[stop];

  return (
    <>
      <Card
        style={{
          margin: 2,
          zIndex: 100,
          backgroundColor: "white",
        }}
        mode="outlined"
        onPress={onPress}
      >
        <Card.Title title={station.name} />
        <Card.Content>
          <Icons>
            {station.connectsTo.map((connection) => (
              <ConnectionIcon key={connection} connectionName={connection} />
            ))}
          </Icons>
        </Card.Content>
      </Card>
      {expanded && (
        <StationDetails station={station} closeDetails={closeDetails} />
      )}
    </>
  );
}
