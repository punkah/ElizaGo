import {
  AbbeyWoodToHeathrowTerminal4,
  AbbeyWoodToHeathrowTerminal5,
  AbbeyWoodToReading,
  LondonPaddingtonToHeathrowTerminal4,
  LondonPaddingtonToHeathrowTerminal5,
  LondonPaddingtonToReading,
  ShenfieldToHeathrowTerminal4,
  ShenfieldToHeathrowTerminal5,
  ShenfieldToLondonLiverpoolStreet,
} from "./lineStops";
import { StopEnum } from "./stopEnum";

export const lines = [
  {
    from: StopEnum.AbbeyWood,
    to: StopEnum.HeathrowTerminal4,
    stops: AbbeyWoodToHeathrowTerminal4,
  },
  {
    from: StopEnum.HeathrowTerminal4,
    to: StopEnum.AbbeyWood,
    stops: [...AbbeyWoodToHeathrowTerminal4].reverse(),
  },
  {
    from: StopEnum.AbbeyWood,
    to: StopEnum.HeathrowTerminal5,
    stops: AbbeyWoodToHeathrowTerminal5,
  },
  {
    from: StopEnum.HeathrowTerminal5,
    to: StopEnum.AbbeyWood,
    stops: [...AbbeyWoodToHeathrowTerminal5].reverse(),
  },
  {
    from: StopEnum.AbbeyWood,
    to: StopEnum.Reading,
    stops: AbbeyWoodToReading,
  },
  {
    from: StopEnum.Reading,
    to: StopEnum.AbbeyWood,
    stops: [...AbbeyWoodToReading].reverse(),
  },
  {
    from: StopEnum.Paddington,
    to: StopEnum.HeathrowTerminal4,
    stops: LondonPaddingtonToHeathrowTerminal4,
  },
  {
    from: StopEnum.HeathrowTerminal4,
    to: StopEnum.Paddington,
    stops: [...LondonPaddingtonToHeathrowTerminal4].reverse(),
  },
  {
    from: StopEnum.Paddington,
    to: StopEnum.HeathrowTerminal5,
    stops: LondonPaddingtonToHeathrowTerminal5,
  },
  {
    from: StopEnum.HeathrowTerminal5,
    to: StopEnum.Paddington,
    stops: [...LondonPaddingtonToHeathrowTerminal5].reverse(),
  },
  {
    from: StopEnum.Paddington,
    to: StopEnum.Reading,
    stops: LondonPaddingtonToReading,
  },
  {
    from: StopEnum.Reading,
    to: StopEnum.Paddington,
    stops: [...LondonPaddingtonToReading].reverse(),
  },
  {
    from: StopEnum.Shenfield,
    to: StopEnum.HeathrowTerminal4,
    stops: ShenfieldToHeathrowTerminal4,
  },
  {
    from: StopEnum.HeathrowTerminal4,
    to: StopEnum.Shenfield,
    stops: [...ShenfieldToHeathrowTerminal4].reverse(),
  },
  {
    from: StopEnum.Shenfield,
    to: StopEnum.HeathrowTerminal5,
    stops: ShenfieldToHeathrowTerminal5,
  },
  {
    from: StopEnum.HeathrowTerminal5,
    to: StopEnum.Shenfield,
    stops: [...ShenfieldToHeathrowTerminal5].reverse(),
  },
  {
    from: StopEnum.Shenfield,
    to: StopEnum.LiverpoolStreet,
    stops: ShenfieldToLondonLiverpoolStreet,
  },
  {
    from: StopEnum.LiverpoolStreet,
    to: StopEnum.Shenfield,
    stops: [...ShenfieldToLondonLiverpoolStreet].reverse(),
  },
];
