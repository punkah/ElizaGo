import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Card, Text } from "react-native-paper";
import styled from "styled-components";
import { lines } from "../constants/TFL/lines";
import { stops } from "../constants/TFL/stations";
import NativeButton from "./native/NativeButton";

const MainContainer = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 16px;
`;

const Top = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

const Bottom = styled(View)`
  margin-top: 16px;
  flex: 1;
  width: 100%;
`;
const FromContainer = styled(View)`
  align-items: flex-start;
  animate: 0.5s;
  transition: 0.5s;
  width: 50%;
  gap: 4px;
`;
const ToContainer = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  animate: 0.5s;
  transition: 0.5s;
  width: 50%;
  gap: 4px;
`;

const defaultFrom = [...new Set(lines.map((line) => line.from))].sort((a, b) =>
  a.name.localeCompare(b.name),
);
const defaultTo = [...new Set(lines.map((line) => line.to))].sort((a, b) =>
  a.name.localeCompare(b.name),
);

export default function MainScreen() {
  const [fromStation, setFromStation] = useState<Station[]>(defaultFrom);
  const [toStation, setToStation] = useState<Station[]>(defaultTo);

  const allowedFrom: Station[] =
    toStation.length === 1 && fromStation.length != 1
      ? lines
          .filter((line) => line.to.name === toStation[0].name)
          .map((line) => line.from)
      : fromStation;
  const allowedTo: Station[] =
    fromStation.length === 1 && toStation.length != 1
      ? lines
          .filter((line) => line.from.name === fromStation[0].name)
          .map((line) => line.to)
      : toStation;

  const setFrom = (station: Station) => () => {
    if (fromStation.length === 1) {
      setFromStation(defaultFrom);
    } else {
      setFromStation([station]);
    }
  };

  const setTo = (station: Station) => () => {
    if (toStation.length === 1) {
      setToStation(defaultTo);
    } else {
      setToStation([station]);
    }
  };

  const getMode = (all: Station[], allowed: Station[], current: Station) => {
    if (all.length === 1) {
      return "contained";
    }
    if (!allowed.includes(current)) {
      return "outlined";
    }
    return undefined;
  };

  const disabled = (allowed: Station[], current: Station) => {
    return !allowed.includes(current);
  };

  let stationList: Station[] = Object.values(stops);
  if (fromStation.length === 1 && toStation.length === 1) {
    stationList = lines.find(
      (line) =>
        line.from.name === fromStation[0].name &&
        line.to.name === toStation[0].name,
    )!.stops;
  }

  return (
    <MainContainer>
      <Top>
        <FromContainer>
          <Text>From</Text>
          {fromStation.map((station) => (
            <NativeButton
              key={station.name}
              title={station.name}
              onPress={setFrom(station)}
              mode={getMode(fromStation, allowedFrom, station)}
              disabled={disabled(allowedFrom, station)}
            />
          ))}
        </FromContainer>
        <ToContainer>
          <Text>To</Text>
          {toStation.map((station) => (
            <NativeButton
              key={station.name}
              title={station.name}
              onPress={setTo(station)}
              mode={getMode(toStation, allowedTo, station)}
              disabled={disabled(allowedTo, station)}
            />
          ))}
        </ToContainer>
      </Top>
      <Bottom>
        <ScrollView>
          {stationList?.map((station) => (
            <Card key={station.name} mode="contained">
              <Card.Content>
                <Text>{station.name}</Text>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </Bottom>
    </MainContainer>
  );
}
