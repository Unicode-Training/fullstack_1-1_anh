import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
export default function LoginModal({ open, onClose }) {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLogin = async (email, password) => {
    setLoading(true);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      setMessage("Email hoặc mật khẩu không chính xác");
    } else {
      const { access_token, refresh_token } = await response.json();
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      onClose();
    }
    setLoading(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    setErrors(errors);
    if (!Object.keys(errors).length) {
      handleLogin(email, password);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2 className="text-2xl text-center mb-3">Login</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="font-bold mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="Email..."
                    name="email"
                    onChange={handleChangeValue}
                  />
                  {errors.email && (
                    <span className="block text-red-600 mt-2">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <label className="font-bold mb-2">Password</label>
                  <Input
                    type="password"
                    placeholder="Password..."
                    name="password"
                    onChange={handleChangeValue}
                  />
                  {errors.password && (
                    <span className="block text-red-600 mt-2">
                      {errors.password}
                    </span>
                  )}
                </div>
                <Button>{isLoading ? "Loading..." : "Login"}</Button>
                {message && <p className="text-red-600 py-2">{message}</p>}
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
