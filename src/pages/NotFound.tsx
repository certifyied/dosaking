import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    // Automatically redirect to homepage
    navigate("/", { replace: true });
  }, [location.pathname, navigate]);

  // Return null or minimal content since redirect happens immediately
  // This prevents any flash of 404 content
  return null;
};

export default NotFound;
