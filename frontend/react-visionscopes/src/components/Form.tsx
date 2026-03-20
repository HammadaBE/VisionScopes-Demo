import { useState, FormEvent, ChangeEvent } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";

// 1. Define the shape of the props
interface FormProps {
  route: string;
  method: "login" | "register"; // Union type limits this to only these two strings
}

function Form({ route, method }: FormProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // 2. Pull setUsername from context (renamed to avoid clash with local state)
  const { setUsername: setAuthUsername } = useAuth();
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  // 2. Type the event as FormEvent
  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        // res.data.access is typed as any by default,
        // but usually you'd define an interface for the API response
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

        // 3. Persist username to to context
        setAuthUsername(username);
        navigate("/home");
      } else {
        navigate("/login");
      }
    } catch (error: any) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} className="form-container">
          <h1>{name}</h1>
          <input
            className="form-input"
            type="text"
            value={username}
            // 3. Type the change event
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            placeholder="Username"
          />
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="Password"
          />
          {loading && <LoadingIndicator />}
          <button className="form-button" type="submit" disabled={loading}>
            {name}
          </button>
          {name === "Login" ? (
            <button
              className="form-button"
              type="button"
              onClick={() => navigate("/register")}
            >
              Don't have an account? Register
            </button>
          ) : (
            <button
              className="form-button"
              type="button"
              onClick={() => navigate("/login")}
            >
              Already have an account? Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Form;
