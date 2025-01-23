import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const baseURL = 'http://localhost:3000';
const { accessToken, login } = useAuth();

export const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request Interceptor: Attach the access token
  axiosInstance.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers['Authorization'] = accessToken;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response Interceptor: Handle token expiration and retry
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // If the token has expired and it's not already retrying
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // Send userId to refresh the token
          const response = await axios.post(`${baseURL}/auth/refresh`, {
            headers: { Authorization: accessToken },
          });

          const newAccessToken = response.headers['authorization'];

          // Update the token in context
          login(newAccessToken);

          // Retry the original request with the new token
          originalRequest.headers['Authorization'] = newAccessToken;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error('Token refresh failed:', refreshError);
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};
