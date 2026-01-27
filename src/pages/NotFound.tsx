import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 attempts for monitoring
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Immediately redirect to homepage using Navigate component
  // This is more efficient than useEffect + navigate as it's declarative
  // replace: true prevents adding to browser history
  return <Navigate to="/" replace />;
};

export default NotFound;
