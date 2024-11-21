import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../state/atoms';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useSetRecoilState(userState);

  const handleLogin = () => {
    if (username === 'doctor' && password === '1234') {
      setUser({ username: 'doctor', role: 'Doctor' });
      navigation.navigate('Home');
    } else if (username === 'patient' && password === '5678') {
      setUser({ username: 'patient', role: 'Patient' });
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid Credentials', 'Please check your username and password and try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Your-Doc</Text>
          <Text style={styles.subtitle}>Your Teleconsultation Partner</Text>

          <View style={styles.inputContainer}>
            <Feather name="user" size={24} color="#4A5568" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#A0AEC0"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Feather name="lock" size={24} color="#4A5568" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#A0AEC0"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#4A5568',
    marginBottom: 32,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF2F7',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 56,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#2D3748',
  },
  button: {
    backgroundColor: '#4299E1',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 16,
  },
  forgotPasswordText: {
    color: '#4299E1',
    fontSize: 16,
  },
});

export default LoginScreen;