import Video from 'twilio-video';

export const connectToRoom = async (token, roomName) => {
  return await Video.connect(token, {
    name: roomName,
    audio: true,
    video: true,
  });
};



