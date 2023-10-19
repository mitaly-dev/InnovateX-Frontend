import jwt_decode from "jwt-decode";

export const setToLocalStorage = (key, token) => {
  if (!key === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key) => {
  if (!key === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

export const getUserInfo = () => {
  const token = localStorage.getItem("token");
  let user;
  if (token) {
    user = jwt_decode(token);
  }
  return user;
};
