import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import { exits } from "../constants/TFL/exits";
import { lines } from "../constants/TFL/lines";
import { StopEnum } from "../constants/TFL/stopEnum";
import NativeButton from "./native/NativeButton";
import StationCard from "./StationCard";

const MainContainer = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Top = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  padding-horizontal: 16px;
  padding-top: 16px;
`;

const Bottom = styled(ScrollView)`
  margin-top: 16px;
  flex: 1;
  width: 100%;
  padding-horizontal: 16px;
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

const FilterRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 16px;
`;

const defaultFrom = [...new Set(lines.map((line) => line.from))].sort((a, b) =>
  a.localeCompare(b),
);
const defaultTo = [...new Set(lines.map((line) => line.to))].sort((a, b) =>
  a.localeCompare(b),
);

export default function MainScreen() {
  const [fromStation, setFromStation] = useState<StopEnum[]>(defaultFrom);
  const [toStation, setToStation] = useState<StopEnum[]>(defaultTo);
  const [showFromTo, setShowFromTo] = useState(false);

  const allowedFrom: StopEnum[] =
    toStation.length === 1 && fromStation.length != 1
      ? lines
          .filter((line) => line.to === toStation[0])
          .map((line) => line.from)
      : fromStation;
  const allowedTo: StopEnum[] =
    fromStation.length === 1 && toStation.length != 1
      ? lines
          .filter((line) => line.from === fromStation[0])
          .map((line) => line.to)
      : toStation;

  const setFrom = (station: StopEnum) => () => {
    if (fromStation.length === 1) {
      setFromStation(defaultFrom);
      setShowFromTo(false);
    } else {
      setFromStation([station]);
      if (toStation.length === 1) {
        setShowFromTo(true);
        setShowContainer(false);
      }
    }
  };

  const setTo = (station: StopEnum) => () => {
    if (toStation.length === 1) {
      setToStation(defaultTo);
      setShowFromTo(false);
    } else {
      setToStation([station]);
      if (fromStation.length === 1) {
        setShowFromTo(true);
        setShowContainer(false);
      }
    }
  };

  const getMode = (all: StopEnum[], allowed: StopEnum[], current: StopEnum) => {
    if (all.length === 1) {
      return "contained";
    }
    if (!allowed.includes(current)) {
      return "outlined";
    }
    return undefined;
  };

  const disabled = (allowed: StopEnum[], current: StopEnum) => {
    return !allowed.includes(current);
  };

  let stopList: StopEnum[] = Object.values(StopEnum);
  if (fromStation.length === 1 && toStation.length === 1) {
    stopList = lines.find(
      (line) => line.from === fromStation[0] && line.to === toStation[0],
    )!.stops;
  }

  const [showContainer, setShowContainer] = useState(false);

  const toggleContainer = () => {
    setShowContainer(!showContainer);
  };

  return (
    <MainContainer>
      <FilterRow>
        <NativeButton title="Filter" onPress={toggleContainer} />
        {showFromTo && (
          <Text>
            From: {fromStation[0]} To: {toStation[0]}
          </Text>
        )}
      </FilterRow>
      {showContainer && (
        <Top>
          <FromContainer>
            <Text>From</Text>
            {fromStation.map((station) => (
              <NativeButton
                key={station}
                title={station}
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
                key={station}
                title={station}
                onPress={setTo(station)}
                mode={getMode(toStation, allowedTo, station)}
                disabled={disabled(allowedTo, station)}
              />
            ))}
          </ToContainer>
        </Top>
      )}
      <Bottom>
        {stopList
          ?.filter((stop) => exits[stop].cars.length > 0)
          .map((stop) => <StationCard stop={stop} key={stop} />)}
      </Bottom>
    </MainContainer>
  );
}
