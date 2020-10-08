import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { TextInput, Button } from 'react-native-paper';

import { Text, View } from '../components/Themed';

const loginSchema = yup.object<LoginValues>({
  username: yup.string().required(),
  password: yup.string().required(),
});

export type LoginValues = {
  username: string;
  password: string;
};

export default function LoginScreen() {
  const initialValues: LoginValues = {
    username: '',
    password: '',
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/Highmarkhealth.jpg')}
      />
      <Text style={styles.title}>Login</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <>
            <TextInput
              label='Username'
              onChangeText={props.handleChange('username')}
              value={props.values.username}
              style={styles.inputText}
            />
            <Text style={styles.errorText}>
              {props.touched.username && props.errors.username}
            </Text>
            <TextInput
              label='Password'
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              style={styles.inputText}
              secureTextEntry
            />
            <Text style={styles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>
            <Button
              mode='contained'
              disabled={props.isSubmitting}
              loading={props.isSubmitting}
              onPress={props.handleSubmit}
            >
              Login
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -100,
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
    width: '80%',
    height: 50,
    // color: 'white',
    fontSize: 15,
  },
  errorText: {
    color: 'crimson',
    marginTop: 6,
    marginBottom: 10,
  },
  logo: {
    width: '80%',
    resizeMode: 'contain',
    marginTop: -100,
  },
});
