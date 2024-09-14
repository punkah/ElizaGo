import { ConnectionEnum } from "./connectionEnum";

export const connections: {
  [key in ConnectionEnum]: Connection;
} = {
  [ConnectionEnum.AbbeyWoodStation]: {
    name: ConnectionEnum.AbbeyWoodStation,
    icon: "",
    color: "#000000",
  },
  [ConnectionEnum.Airport]: {
    name: ConnectionEnum.Airport,
    icon: "",
    color: "#009FE3",
  },
  [ConnectionEnum.Bakerloo]: {
    name: ConnectionEnum.Bakerloo,
    icon: "",
    color: "#B36305",
  },
  [ConnectionEnum.Central]: {
    name: ConnectionEnum.Central,
    icon: "",
    color: "#DC241F",
  },
  [ConnectionEnum.Circle]: {
    name: ConnectionEnum.Circle,
    icon: "",
    color: "#FFD300",
  },
  [ConnectionEnum.DLR]: {
    name: ConnectionEnum.DLR,
    // icon: "../../assets/DLR.png",
    color: "#00A4A7",
  },
  [ConnectionEnum.District]: {
    name: ConnectionEnum.District,
    icon: "",
    color: "#00782A",
  },
  [ConnectionEnum.Exit]: {
    name: ConnectionEnum.Exit,
    icon: "",
    color: "#000000",
  },
  [ConnectionEnum.FarringdonStation]: {
    name: ConnectionEnum.FarringdonStation,
    icon: "",
    color: "#000000",
  },
  [ConnectionEnum.HammersmithAndCity]: {
    name: ConnectionEnum.HammersmithAndCity,
    icon: "",
    color: "#F3A9BB",
  },
  [ConnectionEnum.Jubilee]: {
    name: ConnectionEnum.Jubilee,
    icon: "",
    color: "#A0A5A9",
  },
  [ConnectionEnum.LiverpoolStreetStation]: {
    name: ConnectionEnum.LiverpoolStreetStation,
    icon: "",
    color: "#000000",
  },
  [ConnectionEnum.LondonOverground]: {
    name: ConnectionEnum.LondonOverground,
    icon: "",
    color: "#EE7C0E",
  },
  [ConnectionEnum.Metropolitan]: {
    name: ConnectionEnum.Metropolitan,
    icon: "",
    color: "#9B0056",
  },
  [ConnectionEnum.NationalRail]: {
    name: ConnectionEnum.NationalRail,
    // icon: NationalRail,
    color: "#000000",
  },
  [ConnectionEnum.Northern]: {
    name: ConnectionEnum.Northern,
    icon: "",
    color: "#000000",
  },
  [ConnectionEnum.PaddingtonStation]: {
    name: ConnectionEnum.PaddingtonStation,
    icon: "",
    color: "#000000",
  },
  [ConnectionEnum.Piccadilly]: {
    name: ConnectionEnum.Piccadilly,
    icon: "",
    color: "#0019A8",
  },
};
