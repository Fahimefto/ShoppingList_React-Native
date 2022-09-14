import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  FlatList,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Tasks from "../components/Tasks";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [input, setInput] = useState();
  const [items, setItems] = useState([]);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const handleSubmit = () => {
    console.log(input);
    Keyboard.dismiss();
    setItems([...items, input]);
    setInput(null);
  };
  const completeTask = (index) => {
    let itemscopy = [...items];
    itemscopy.splice(index, 1);
    setItems(itemscopy);
    console.log(items);
  };
  return (
    <SafeAreaView>
      <Text className="text-2xl mt-20 pl-6 font-bold text-indigo-600">
        Shopping List
      </Text>

      <ScrollView className="min-h-screen">
        <View className=" m-6">
          {items < 1 ? (
            <View className="w-full p-5 bg-red-100 rounded-full mt-10">
              <Text className="text-center items-center font-bold text-xl ">
                Empty List
              </Text>
            </View>
          ) : (
            <View></View>
          )}
          {items?.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => completeTask(index)}>
                <Tasks text={item} key={index} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : "height" || Platform.OS === "android"
            ? "padding"
            : "height"
        }
        className="absolute bottom-1/4 p-5  flex flex-row justify-between w-full "
      >
        <TextInput
          className="  border-indigo-600 border-2 p-2 rounded-full w-4/5 bg-slate-50 "
          placeholder="Add item"
          onChangeText={(text) => setInput(text)}
          value={input}
        />
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View className="px-5 bg-indigo-600 py-3 rounded-full">
            <Text className="font-bold text-lg text-slate-100">+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
