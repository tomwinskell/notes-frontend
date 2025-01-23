import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface ProtectedRouteProps {
  redirectPath?: string;
  children: React.ReactNode;
}

export default function ProtectedRoute({
  redirectPath = '/login',
  children,
}: ProtectedRouteProps) {
  const { accessToken } = useAuth();
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    const validateUser = async (accessToken: string): Promise<void> => {
      try {
        const response = await axios.get('http://localhost:3000/auth/v', {
          headers: { Authorization: accessToken },
        });

        if (response.data['valid']) {
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      } catch (error) {
        console.error('Access not authorized', error);
        setIsValid(false);
      }
    };

    if (accessToken) {
      validateUser(accessToken);
    } else {
      setIsValid(false);
    }
  }, [accessToken]);

  if (isValid === null) {
    return <div>Loading...</div>;
  } else if (!isValid) {
    return <Navigate to={redirectPath} />;
  } else {
    return <>{children}</>;
  }
}
