import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import AuthService from "./appwrite/auth";
import { login } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    AuthService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? <div className="min-h-screen">nice</div> : null;
}

export default App;
