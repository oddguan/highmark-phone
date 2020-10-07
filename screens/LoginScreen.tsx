import * as React from 'react';
import { StyleSheet, TextInput, Appearance } from 'react-native';

import { Text, View } from '../components/Themed';

export default function LoginScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const textColor = Appearance.getColorScheme() === 'dark' ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)";
  const placeholderTextColor = Appearance.getColorScheme() === 'dark' ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.6)";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder='Username'
          placeholderTextColor={placeholderTextColor}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder='Password'
          secureTextEntry
          placeholderTextColor={placeholderTextColor}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  inputView: {
    width: '80%',
    justifyContent: 'center',
  },
  inputText: {
    height: 50,
    color: 'white',
  },
});
