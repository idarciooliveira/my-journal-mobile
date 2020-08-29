import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView>
      <View>
        <View style={styles.app}>
          <View style={styles.separator}>
            <Image
              style={styles.logo}
              source={require('../../assets/logo.png')}
            />
          </View>
          <Text style={styles.title}>My Journal</Text>
        </View>
        <TextInput style={styles.input} placeholder='Digite o seu username' />
        <TextInput
          style={styles.input}
          placeholder='Digite o seu password'
          textContentType={'password'}
        />
        <View style={styles.separator}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  app: {
    marginBottom: 50,
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    padding: 5,
    height: 45,
    borderRadius: 5,
    margin: 5,
    fontSize: 16,
    alignSelf: 'center',
  },
  separator: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    borderColor: '#6F6F74',
    borderWidth: 1,
    padding: 20,
    borderRadius: 5,
    height: 50,
    margin: 5,
    width: 190,
    padding: 5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
});

export default Login;
