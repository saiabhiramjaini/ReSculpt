import axios from 'axios';
import { BACKEND_URL } from './secrets';

const checkAuth = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/v1/auth/authCheck`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Authentication check failed:', error);
    return { isAuthenticated: false, role: null };
  }
};

export default checkAuth;