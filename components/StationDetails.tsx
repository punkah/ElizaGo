import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Text, View } from "react-native";
import ActionSheet, {
  ActionSheetRef,
  SheetProvider,
} from "react-native-actions-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styled from "styled-components";
import { exits } from "../constants/TFL/exits";
import { Station } from "../types/station";
import ConnectionIcon from "./ConnectionIcon";

const TrainContainer = styled(View)`
  gap: 3px;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  padding: 10px 0;
`;

const CarContainer = styled(View)`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  flex: 1;
`;

const CarView = styled(View)`
  align-self: stretch;
  width: 50px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function StationDetails({
  station,
  closeDetails,
}: {
  station: Station;
  closeDetails: () => void;
}) {
  const actionSheetRef = useRef<ActionSheetRef>(null);

  useEffect(() => {
    actionSheetRef.current?.show();
  }, []);

  const cars = exits[station.name].cars;
  // console.log(currentExits);
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView
        style={{
          flex: 1,
        }}
      >
        <SheetProvider context="global">
          <ActionSheet
            ref={actionSheetRef}
            // indicatorStyle={{
            //   width: 100,
            // }}
            gestureEnabled
            // safeAreaInsets={insets}
            // drawUnderStatusBar
            // containerStyle={{
            //   height: "100%",
            // }}
            // enableGesturesInScrollView
            containerStyle={{
              maxHeight: "100%",
              height: "95%",
            }}
          >
            <View
              style={{
                paddingBottom: 120,
                paddingHorizontal: 12,

                // alignItems: "center",
                // paddingTop: 20,
                // gap: 10,
                // width: "100%",
                // height: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* add a back button that closes this screen */}
                <View
                  style={{
                    flexDirection: "row",
                    gap: 5,
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    icon="arrow-left"
                    size={20}
                    mode="contained"
                    onPress={closeDetails}
                  />

                  <Text>{station.name}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 15,

                    alignItems: "center",
                  }}
                >
                  <Text>Towards</Text>
                  <View
                    style={{
                      backgroundColor: "pink",
                      padding: 8,
                      borderRadius: 20,
                      paddingHorizontal: 15,
                      height: 36,
                    }}
                  >
                    <Text style={{ fontSize: 15, color: "black" }}>
                      Paddington
                    </Text>
                    {/* <Icon source={"recycle"} size={16}></Icon> */}
                  </View>
                </View>
              </View>
              <TrainContainer>
                {/* <TrainFront />? */}
                {cars.map((car, i) => (
                  <CarContainer key={i}>
                    <CarView>
                      <Text>{i + 1}</Text>
                    </CarView>
                    {car.connectsTo.map((connection) => (
                      <View key={connection}>
                        <ConnectionIcon connectionName={connection} large />
                      </View>
                    ))}
                    {car.hasExit && <Ionicons name="exit-outline" size={36} />}
                    {car.hasLift && <FontAwesome6 name="elevator" size={30} />}
                  </CarContainer>
                ))}
              </TrainContainer>
            </View>
          </ActionSheet>
        </SheetProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
