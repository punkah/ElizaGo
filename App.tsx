import { PaperProvider } from "react-native-paper";
import MainScreen from "./components/MainScreen";

export default function App() {
  return (
    <PaperProvider>
      <MainScreen />
    </PaperProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
