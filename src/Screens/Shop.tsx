import React from "react";
import { SafeAreaView } from "react-native";
import BackButton from "../components/Buttons/BackButton";

const ShopScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <BackButton title="Home Screen" />
    </SafeAreaView>
  );
};

export default ShopScreen;
