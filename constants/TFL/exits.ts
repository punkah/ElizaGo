import { ConnectionEnum } from "./connectionEnum";
import { StopEnum } from "./stopEnum";

export interface Car {
  connectsTo: ConnectionEnum[];
  hasExit?: boolean;
  hasLift?: boolean;
}

export interface Cars {
  cars: Car[];
}

// car numbering from west to east
// { connectsTo: [], },
// { connectsTo: [], },
// { connectsTo: [], },
// { connectsTo: [], },
// { connectsTo: [], },
// { connectsTo: [], },
// { connectsTo: [], },
// { connectsTo: [], },
// { connectsTo: [], },
export const exits: { [key: string]: Cars } = {
  [StopEnum.AbbeyWood]: {
    cars: [
      { connectsTo: [ConnectionEnum.AbbeyWoodStation] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [ConnectionEnum.AbbeyWoodStation] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [], hasExit: true },
    ],
  },
  [StopEnum.ActonMainLine]: {
    cars: [],
  },
  [StopEnum.BondStreet]: {
    cars: [
      { connectsTo: [], hasExit: true },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [], hasExit: true },
    ],
  },
  [StopEnum.Brentwood]: {
    cars: [],
  },
  [StopEnum.BurnhamBerks]: {
    cars: [],
  },
  [StopEnum.CanaryWharf]: {
    cars: [
      { connectsTo: [] },
      { connectsTo: [ConnectionEnum.DLR], hasExit: true },
      { connectsTo: [] },
      { connectsTo: [], hasLift: true },
      { connectsTo: [] },
      { connectsTo: [], hasLift: true },
      { connectsTo: [ConnectionEnum.Jubilee], hasExit: true },
      { connectsTo: [ConnectionEnum.Jubilee], hasExit: true },
      { connectsTo: [] },
    ],
  },
  [StopEnum.ChadwellHeath]: {
    cars: [],
  },
  [StopEnum.CustomHouse]: {
    cars: [
      { connectsTo: [] },
      { connectsTo: [ConnectionEnum.DLR], hasExit: true },
      { connectsTo: [ConnectionEnum.DLR], hasExit: true },
      { connectsTo: [], hasLift: true },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
    ],
  },
  [StopEnum.EalingBroadway]: {
    cars: [],
  },
  [StopEnum.Farringdon]: {
    cars: [
      { connectsTo: [ConnectionEnum.FarringdonStation], hasExit: true },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [], hasExit: true },
    ],
  },
  [StopEnum.ForestGate]: {
    cars: [],
  },
  [StopEnum.GideaPark]: {
    cars: [],
  },
  [StopEnum.Goodmayes]: {
    cars: [],
  },
  [StopEnum.Hanwell]: {
    cars: [],
  },
  [StopEnum.HaroldWood]: {
    cars: [],
  },
  [StopEnum.HayesHarlington]: {
    cars: [],
  },
  [StopEnum.HeathrowTerminal4]: {
    cars: [],
  },
  [StopEnum.HeathrowTerminal5]: {
    cars: [],
  },
  [StopEnum.HeathrowTerminals23]: {
    cars: [],
  },
  [StopEnum.Ilford]: {
    cars: [],
  },
  [StopEnum.Iver]: {
    cars: [],
  },
  [StopEnum.LangleyBerks]: {
    cars: [],
  },
  [StopEnum.LiverpoolStreet]: {
    cars: [
      { connectsTo: [ConnectionEnum.Northern], hasExit: true },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      {
        connectsTo: [ConnectionEnum.LiverpoolStreetStation],
        hasExit: true,
      },
      { connectsTo: [] },
    ],
  },
  [StopEnum.Maidenhead]: {
    cars: [],
  },
  [StopEnum.ManorPark]: {
    cars: [],
  },
  [StopEnum.Maryland]: {
    cars: [],
  },
  [StopEnum.Paddington]: {
    cars: [
      { connectsTo: [] },
      { connectsTo: [ConnectionEnum.PaddingtonStation] },
      { connectsTo: [ConnectionEnum.PaddingtonStation] },
      { connectsTo: [] },
      { connectsTo: [ConnectionEnum.Bakerloo] },
      { connectsTo: [] },
      { connectsTo: [ConnectionEnum.PaddingtonStation] },
      { connectsTo: [] },
      { connectsTo: [] },
    ],
  },
  [StopEnum.Reading]: {
    cars: [],
  },
  [StopEnum.Romford]: {
    cars: [],
  },
  [StopEnum.SevenKings]: {
    cars: [],
  },
  [StopEnum.Shenfield]: {
    cars: [],
  },
  [StopEnum.Slough]: {
    cars: [],
  },
  [StopEnum.Southall]: {
    cars: [],
  },
  [StopEnum.StratfordLondon]: {
    cars: [],
  },
  [StopEnum.Taplow]: {
    cars: [],
  },
  [StopEnum.TottenhamCourtRoad]: {
    cars: [
      { connectsTo: [], hasExit: true },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      {
        connectsTo: [ConnectionEnum.NationalRail, ConnectionEnum.Central],
        hasExit: true,
      },
    ],
  },
  [StopEnum.Twyford]: {
    cars: [],
  },
  [StopEnum.WestDrayton]: {
    cars: [],
  },
  [StopEnum.WestEaling]: {
    cars: [],
  },
  [StopEnum.Whitechapel]: {
    cars: [
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [], hasExit: true },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
    ],
  },
  [StopEnum.Woolwich]: {
    cars: [
      { connectsTo: [] },
      { connectsTo: [], hasExit: true },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
      { connectsTo: [] },
    ],
  },
};
