import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import checkAuth from '../utils/auth';

interface AuthState {
  isAuthenticated: boolean | null;
}

const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({ isAuthenticated: null });
  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = async () => {
      const authStatus = await checkAuth();
      setAuthState(authStatus);

      if (authStatus.isAuthenticated) {
        navigate('/home'); // Redirect to home if authenticated
      } else {
        navigate('/signin'); // Redirect to signin if not authenticated
      }
    };

    authenticate();
  }, [navigate]);

  return authState;
};

export default useAuth;
