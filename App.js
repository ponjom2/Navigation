import React from "react";
import { Button, Linking, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import style from "./src/Styles";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text style={style.header}>Home</Text>
      <View style={style.button}>
        <Button
          title="About"
          onPress={() => navigation.navigate("About")}
          color="red"
        />
      </View>
      <View>
        <Button
          title="See Credits"
          onPress={() => navigation.navigate("Credits")}
        />
      </View>
    </View>
  )
}

function AboutScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text style={style.header}>About</Text>
      <View style={style.button}>
        <Button
          title="Credits"
          onPress={() => navigation.navigate("Credits")}
        />
      </View>
      <View>
        <Button
          title="Home"
          onPress={() => navigation.navigate("Home")}
          color="red"
        />
      </View>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "#2c0735"
            },
            headerTintColor: "#d3d3d3",
            headerRight: () => (
              <Button onPress={() => Linking.openURL("https://youtu.be/dQw4w9WgXcQ")}
                title="Dont Press ME!"
                color="#d3d3d3"
              />
            )
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerStyle: {
              backgroundColor: "#5eb1bf"
            },
            headerTintColor: "#2c0735",
            headerRight: () => (
              <Button onPress={() => alert("YOU HAVE WON A MILLION DOLLARS")}
                title="????"
                color="#2c0735"
              />
            )
          }}
        />
        <Stack.Screen
          name="Credits"
          getComponent={() => require("./src/Credits").default}
          options={{
            headerStyle: {
              backgroundColor: "#d84742"
            },
            headerTintColor: "#d3d3d3",
            headerRight: () => (
              <Button onPress={() => Linking.openURL("https://github.com/ponjom2")}
                title="Github"
                color="#d3d3d3"
              />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}