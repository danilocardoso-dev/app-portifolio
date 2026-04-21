import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


export default function SkillScreen() {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/skill.jpg')} style={styles.image} />
        <Text style={styles.text}>Danilo Vinicius</Text>
        <Text style={styles.text}><FontAwesome5 name="bug" size={35} color="#900c0c" />  CyberSecurity</Text>
        <Text style={styles.text}><FontAwesome5 name="python" size={35} color="#306998" />  Python</Text>
        <Text style={styles.text}><FontAwesome5 name="js" size={35} color="#F7DF1E" />  Full Stack JS</Text>
        <Text style={styles.text}><FontAwesome5 name="react" size={35} color="#1f6de2" /> React / React Native</Text>
        <Text style={styles.text}><FontAwesome5 name="node-js" size={35} color="#0b7824" />  NodeJS</Text>
        <Text style={styles.text}><FontAwesome5 name="database" size={35} color="#3e3e3c" />  SQL</Text>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
    text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    marginBottom: 20,
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 100
  },
});