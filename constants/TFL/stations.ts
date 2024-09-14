import { Station } from "../../types/station";
import { ConnectionEnum } from "./connectionEnum";
import { StopEnum } from "./stopEnum";

export const stations: { [key in StopEnum]: Station } = {
  [StopEnum.AbbeyWood]: {
    name: "Abbey Wood",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.ActonMainLine]: {
    name: "Acton Main Line",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.BondStreet]: {
    name: "Bond Street",
    connectsTo: [ConnectionEnum.Central, ConnectionEnum.Jubilee],
  },
  [StopEnum.Brentwood]: {
    name: "Brentwood",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.BurnhamBerks]: {
    name: "Burnham (Berks)",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.CanaryWharf]: {
    name: "Canary Wharf",
    connectsTo: [ConnectionEnum.Jubilee, ConnectionEnum.DLR],
  },
  [StopEnum.ChadwellHeath]: {
    name: "Chadwell Heath",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.CustomHouse]: {
    name: "Custom House",
    connectsTo: [ConnectionEnum.DLR],
  },
  [StopEnum.EalingBroadway]: {
    name: "Ealing Broadway",
    connectsTo: [
      ConnectionEnum.Central,
      ConnectionEnum.District,
      ConnectionEnum.NationalRail,
    ],
  },
  [StopEnum.Farringdon]: {
    name: "Farringdon",
    connectsTo: [
      ConnectionEnum.Circle,
      ConnectionEnum.HammersmithAndCity,
      ConnectionEnum.Metropolitan,
      ConnectionEnum.NationalRail,
    ],
  },
  [StopEnum.ForestGate]: {
    name: "Forest Gate",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.GideaPark]: {
    name: "Gidea Park",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.Goodmayes]: {
    name: "Goodmayes",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.Hanwell]: {
    name: "Hanwell",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.HaroldWood]: {
    name: "Harold Wood",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.HayesHarlington]: {
    name: "Hayes & Harlington",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.HeathrowTerminal4]: {
    name: "Heathrow Terminal 4",
    connectsTo: [
      ConnectionEnum.Piccadilly,
      ConnectionEnum.NationalRail,
      ConnectionEnum.Airport,
    ],
  },
  [StopEnum.HeathrowTerminal5]: {
    name: "Heathrow Terminal 5",
    connectsTo: [
      ConnectionEnum.Piccadilly,
      ConnectionEnum.NationalRail,
      ConnectionEnum.Airport,
    ],
  },
  [StopEnum.HeathrowTerminals23]: {
    name: "Heathrow Terminals 2 & 3",
    connectsTo: [
      ConnectionEnum.Piccadilly,
      ConnectionEnum.NationalRail,
      ConnectionEnum.Airport,
    ],
  },
  [StopEnum.Ilford]: {
    name: "Ilford",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.Iver]: {
    name: "Iver",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.LangleyBerks]: {
    name: "Langley (Berks)",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.LiverpoolStreet]: {
    name: "Liverpool Street",
    connectsTo: [
      ConnectionEnum.Central,
      ConnectionEnum.Circle,
      ConnectionEnum.HammersmithAndCity,
      ConnectionEnum.Metropolitan,
      ConnectionEnum.NationalRail,
      ConnectionEnum.LondonOverground,
    ],
  },
  [StopEnum.Maidenhead]: {
    name: "Maidenhead",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.ManorPark]: {
    name: "Manor Park",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.Maryland]: {
    name: "Maryland",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.Paddington]: {
    name: "Paddington",
    connectsTo: [
      ConnectionEnum.Bakerloo,
      ConnectionEnum.Circle,
      ConnectionEnum.District,
      ConnectionEnum.HammersmithAndCity,
      ConnectionEnum.NationalRail,
    ],
  },
  [StopEnum.Reading]: {
    name: "Reading",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.Romford]: {
    name: "Romford",
    connectsTo: [ConnectionEnum.NationalRail, ConnectionEnum.LondonOverground],
  },
  [StopEnum.SevenKings]: {
    name: "Seven Kings",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.Shenfield]: {
    name: "Shenfield",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.Slough]: {
    name: "Slough",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.Southall]: {
    name: "Southall",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.StratfordLondon]: {
    name: "Stratford (London)",
    connectsTo: [
      ConnectionEnum.Central,
      ConnectionEnum.Jubilee,
      ConnectionEnum.DLR,
      ConnectionEnum.NationalRail,
      ConnectionEnum.LondonOverground,
    ],
  },
  [StopEnum.Taplow]: {
    name: "Taplow",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.TottenhamCourtRoad]: {
    name: "Tottenham Court Road",
    connectsTo: [ConnectionEnum.Central, ConnectionEnum.Northern],
  },
  [StopEnum.Twyford]: {
    name: "Twyford",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.WestDrayton]: {
    name: "West Drayton",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.WestEaling]: {
    name: "West Ealing",
    connectsTo: [ConnectionEnum.NationalRail],
  },
  [StopEnum.Whitechapel]: {
    name: "Whitechapel",
    connectsTo: [
      ConnectionEnum.District,
      ConnectionEnum.HammersmithAndCity,
      ConnectionEnum.LondonOverground,
    ],
  },
  [StopEnum.Woolwich]: {
    name: "Woolwich",
    connectsTo: [],
  },
};
