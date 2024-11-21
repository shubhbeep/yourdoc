import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../state/atoms';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const user = useRecoilValue(userState);

  const handleStartCall = () => {
    navigation.navigate('VideoCall', { room: 'test-room' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7FAFC" />
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.roleText}>{user.role}!</Text>
      </View>
      <View style={styles.content}>
        {user.role === 'Doctor' ? (
          <TouchableOpacity style={styles.startCallButton} onPress={handleStartCall}>
            <Feather name="video" size={24} color="#FFFFFF" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Start Call</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.waitingContainer}>
            <Feather name="clock" size={48} color="#4A5568" style={styles.waitingIcon} />
            <Text style={styles.waitingText}>Waiting for a call invitation...</Text>
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
        <Feather name="log-out" size={24} color="#4A5568" style={styles.buttonIcon} />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2D3748',
  },
  roleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4299E1',
    marginTop: 4,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  startCallButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4299E1',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  buttonIcon: {
    marginRight: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  waitingContainer: {
    alignItems: 'center',
  },
  waitingIcon: {
    marginBottom: 16,
  },
  waitingText: {
    fontSize: 18,
    color: '#4A5568',
    textAlign: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#4A5568',
    marginLeft: 8,
  },
});

export default HomeScreen;