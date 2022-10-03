import { StyleSheet, Text, View } from "react-native";
import PayPage from "./screens/PayPage";
export default function App() {
  return (
    <View style={styles.container}>
      <PayPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
