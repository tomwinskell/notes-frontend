// src/utils/axiosInstance.ts
import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const createAxiosInstance = (
  getAccessToken: () => string | null,
  setAccessToken: (token: string) => void,
  getUserId: () => string | null
) => {
  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request Interceptor: Attach the access token
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getAccessToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
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

        const userId = getUserId();
        if (userId) {
          try {
            // Send userId to refresh the token
            const response = await axios.post(`${baseURL}/auth/refresh`, {
              userId,
            });

            const newAccessToken = response.data.accessToken;

            // Update the token in context
            setAccessToken(newAccessToken);

            // Retry the original request with the new token
            originalRequest.headers['Authorization'] =
              `Bearer ${newAccessToken}`;
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            console.error('Token refresh failed:', refreshError);
            return Promise.reject(refreshError);
          }
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
