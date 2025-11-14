export const debounce = (func, delay = 500) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const saveToken = (token) => {
  localStorage.setItem("access_token", token.access_token);
  localStorage.setItem("refresh_token", token.refresh_token);
};

export const getAccessToken = () => {
  return localStorage.getItem("access_token");
};
export const getRefreshToken = () => {
  return localStorage.getItem("refresh_token");
};

export const removeToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export const getNewToken = async () => {
  const refreshToken = getRefreshToken();
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/refresh-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      }
    );
    if (!response.ok) {
      throw new Error("refresh token failed");
    }
    return response.json();
  } catch {
    return false;
  }
};
