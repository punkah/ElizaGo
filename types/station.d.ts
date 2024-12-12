import { ConnectionEnum } from "../constants/TFL/connectionEnum";

type Station = {
  name: string;
  connectsTo: ConnectionEnum[];
};
