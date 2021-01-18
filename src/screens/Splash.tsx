import React from "react";
import { View, Image, Dimensions, ActivityIndicator } from "react-native";

const Splash = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: Dimensions.get("window").height,
        }}
      >
        <Image source={require("../../assets/splash.png")} />
        <ActivityIndicator style={{ marginTop: 15 }} size={50} color={"blue"} />
      </View>
    </View>
  );
};

export default Splash;
