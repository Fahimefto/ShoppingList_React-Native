import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { StopIcon } from "react-native-heroicons/solid";
import { CheckIcon } from "react-native-heroicons/solid";

const Tasks = (props) => {
  return (
    <View
      className="bg-gray-50 flex flex-row w-full items-center mb-3 rounded-full p-1 pr-5 "
      key={props.index}
    >
      <View className="flex-row flex-1 p-3  space-x-5">
        <StopIcon color="#4F46E5" />
        <Text className="font-bold ">{props.text}</Text>
      </View>
      <CheckIcon color="#16A34A" />
    </View>
  );
};

export default Tasks;
