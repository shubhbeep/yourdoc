import React from 'react';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import VideoCallScreen from './src/screens/VideoCallScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* Login Screen */}
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          {/* Home Screen */}
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Dashboard' }} 
          />
          {/* Video Call Screen */}
          <Stack.Screen 
            name="VideoCall" 
            component={VideoCallScreen} 
            options={{ title: 'Video Call' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}



