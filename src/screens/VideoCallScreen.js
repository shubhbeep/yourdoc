import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { connectToRoom } from '../utils/twilioUtils';

const VideoCallScreen = ({ route, navigation }) => {
  const { room } = route.params;
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const joinRoom = async () => {
      const token = await fetch(`http://localhost:3000/token?identity=User&room=${room}`)
        .then((res) => res.json())
        .then((data) => data.token);

      const roomInstance = await connectToRoom(token, room);

      roomInstance.on('participantConnected', (participant) => {
        setParticipants((prev) => [...prev, participant]);
      });

      roomInstance.on('participantDisconnected', (participant) => {
        setParticipants((prev) =>
          prev.filter((p) => p.identity !== participant.identity)
        );
      });

      return () => roomInstance.disconnect();
    };

    joinRoom();
  }, [room]);

  return (
    <View>
      <Text>Connected to {room}</Text>
      {participants.map((participant) => (
        <Text key={participant.identity}>{participant.identity}</Text>
      ))}
      <Button title="End Call" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default VideoCallScreen;



