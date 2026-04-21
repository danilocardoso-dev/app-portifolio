import React from "react";
import { Image, Linking, Pressable, StyleSheet, Text, View } from "react-native";

export default function MainScreen() {
    const openLinkedIn = () => {
        const url = 'https://www.linkedin.com/in/danilo-cardoso-4ba802230/?locale=pt';
        Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
    }
    const openGitHub = () => {
        const url = 'https://github.com/danilocardoso-dev';
        Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
    }
    const openEmail = () => {
        const email = 'danilocardosodemelo@gmail.com';
        const subject = 'Contato via Portfólio';
        const body = 'Olá Danilo, gostaria de entrar em contato com você.';
        const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
    }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/perfil.jpg')} style={styles.image} />
      <Text style={styles.text}>Danilo Vinicius</Text>
      <Pressable style={styles.button} onPress={openLinkedIn}>
        <Text style={styles.buttonText}>LinkedIn</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={openGitHub}>
        <Text style={styles.buttonText}>GitHub</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={openEmail}>
        <Text style={styles.buttonText}>Email</Text>
      </Pressable>
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
  button: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,

  },
});