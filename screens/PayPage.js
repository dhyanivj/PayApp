import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

export default function payPage() {
  return (
    <View>
      <TopNavigation />
      <MoneyCard />
    </View>
  );
}

const TopNavigation = function TopNavigation() {
  return (
    <View style={styles.Topbar}>
      <Icon name="arrowleft" size={25} />
      <Text>logo</Text>
      <Text style={{ color: "#00b9f5", fontWeight: "600" }}>Help</Text>
    </View>
  );
};
const MoneyCard = function MoneyCard() {
  return (
    <View style={styles.Moneycard}>
      <View style={styles.NameDetails}>
        <View style={styles.avatar}>
          <Text style={styles.avatarName}>LI</Text>
        </View>
        <View>
          <Text style={styles.SenderName}>Lorem Ipsum</Text>
          <Text>CB9885</Text>
        </View>
      </View>
      <View
        style={{
          height: 15,
          position: "absolute",
          bottom: 0,
        }}
      >
        <Text style={{ backgroundColor: "blue", width: 400 }}>test</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 5,
    marginLeft: 5,
  },
  Moneycard: {
    backgroundColor: "#def6ff",
    margin: 10,
    borderRadius: 16,
    height: 200,
    paddingTop: 15,
  },
  avatar: {
    backgroundColor: "#ec5800",
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarName: {
    fontWeight: "900",
    color: "white",
  },
  NameDetails: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  SenderName: {
    fontWeight: "700",
  },
});
