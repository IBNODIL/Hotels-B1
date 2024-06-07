import { useLocation } from 'react-router-dom';

const useShowNavBar = () => {
  const location = useLocation();
  const hiddenPaths = ['/register', '/login']; // Add other paths where Navbar should be hidden

  return !hiddenPaths.includes(location.pathname);
};

export default useShowNavBar;
