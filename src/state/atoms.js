import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: null, // Stores user info like { username: 'doctor', role: 'Doctor' }
});

export const callState = atom({
  key: 'callState',
  default: {
    isInCall: false,
    peerConnection: null,
  },
});



