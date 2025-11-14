import { useEffect, useState } from "react";
import {
  getAccessToken,
  getNewToken,
  removeToken,
  saveToken,
} from "../../utils/utils";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const getProfile = async () => {
      const accessToken = getAccessToken();
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/auth/profile`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.status === 401) {
          throw new Error("Error");
        }
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch {
        //Xử lý refresh token
        const newToken = await getNewToken();
        if (newToken) {
          saveToken(newToken);
          getProfile();
        } else {
          //Logout
          removeToken();
          navigate("/login");
        }
      }
    };
    getProfile();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h1>Thông tin user</h1>
      <p>- Name: {user.name}</p>
      <p>- Email: {user.email}</p>
      <p>- Avatar: {user.avatar}</p>
    </div>
  );
}
