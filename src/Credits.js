import React from "react";
import { Button, Text, View } from "react-native";
import style from "./Styles"

function CreditsScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text style={style.header}>Credits</Text>
      <View style={style.button}>
        <Button
          title="About"
          onPress={() => navigation.navigate("About")}
          color="red"
        />
      </View>
      <View>
        <Button
          title="Back to Home"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  )
}

export default CreditsScreen;