import { Navigate } from 'react-router-dom';
import { useAppContext } from '../assets/context/appContext';

const ProtectRoute = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};
export default ProtectRoute;
