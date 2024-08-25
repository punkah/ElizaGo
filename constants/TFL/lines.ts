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
  stops,
} from "./stations";

export const lines = [
  {
    from: stops.AbbeyWood,
    to: stops.HeathrowTerminal4,
    stops: AbbeyWoodToHeathrowTerminal4,
  },
  {
    from: stops.HeathrowTerminal4,
    to: stops.AbbeyWood,
    stops: [...AbbeyWoodToHeathrowTerminal4].reverse(),
  },
  {
    from: stops.AbbeyWood,
    to: stops.HeathrowTerminal5,
    stops: AbbeyWoodToHeathrowTerminal5,
  },
  {
    from: stops.HeathrowTerminal5,
    to: stops.AbbeyWood,
    stops: [...AbbeyWoodToHeathrowTerminal5].reverse(),
  },
  {
    from: stops.AbbeyWood,
    to: stops.Reading,
    stops: AbbeyWoodToReading,
  },
  {
    from: stops.Reading,
    to: stops.AbbeyWood,
    stops: [...AbbeyWoodToReading].reverse(),
  },
  {
    from: stops.Paddington,
    to: stops.HeathrowTerminal4,
    stops: LondonPaddingtonToHeathrowTerminal4,
  },
  {
    from: stops.HeathrowTerminal4,
    to: stops.Paddington,
    stops: [...LondonPaddingtonToHeathrowTerminal4].reverse(),
  },
  {
    from: stops.Paddington,
    to: stops.HeathrowTerminal5,
    stops: LondonPaddingtonToHeathrowTerminal5,
  },
  {
    from: stops.HeathrowTerminal5,
    to: stops.Paddington,
    stops: [...LondonPaddingtonToHeathrowTerminal5].reverse(),
  },
  {
    from: stops.Paddington,
    to: stops.Reading,
    stops: LondonPaddingtonToReading,
  },
  {
    from: stops.Reading,
    to: stops.Paddington,
    stops: [...LondonPaddingtonToReading].reverse(),
  },
  {
    from: stops.Shenfield,
    to: stops.HeathrowTerminal4,
    stops: ShenfieldToHeathrowTerminal4,
  },
  {
    from: stops.HeathrowTerminal4,
    to: stops.Shenfield,
    stops: [...ShenfieldToHeathrowTerminal4].reverse(),
  },
  {
    from: stops.Shenfield,
    to: stops.HeathrowTerminal5,
    stops: ShenfieldToHeathrowTerminal5,
  },
  {
    from: stops.HeathrowTerminal5,
    to: stops.Shenfield,
    stops: [...ShenfieldToHeathrowTerminal5].reverse(),
  },
  {
    from: stops.Shenfield,
    to: stops.LiverpoolStreet,
    stops: ShenfieldToLondonLiverpoolStreet,
  },
  {
    from: stops.LiverpoolStreet,
    to: stops.Shenfield,
    stops: [...ShenfieldToLondonLiverpoolStreet].reverse(),
  },
];
