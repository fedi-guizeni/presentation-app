import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { shouldRedirectToControl } from '../utils/deviceDetection';

export const DeviceRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirectToControl()) {
      navigate('/control');
    }
  }, [navigate]);

  return null;
};
