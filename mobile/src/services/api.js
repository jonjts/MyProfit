import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'


const api = axios.create({
  baseURL: 'http://192.168.0.7:3333/api',
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem("@token");
  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;