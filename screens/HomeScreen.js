import { View, Text } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-200 m-10 rounded-lg">
      <Text className="text-green-800 font-bold bg-green-200 p-3 rounded">
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;
