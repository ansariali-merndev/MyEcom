import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchVerify = async () => {
  const res = await axiosInstance.get("/verify", {
    withCredentials: true,
  });
  console.log(res.data);
  return res.data.message;
};

export const fetchRegister = async (formData) => {
  const res = await axiosInstance.post("/register", formData, {
    withCredentials: true,
  });
  return res.data.message;
};

export const fetchLogin = async (formData) => {
  const res = await axiosInstance.post("/login", formData, {
    withCredentials: true,
  });
  return res.data.message;
};

export const fetchProfile = async () => {
  const res = await axiosInstance.get("/profile", {
    withCredentials: true,
  });

  return res.data;
};

export const fetchLogout = async () => {
  const res = await axiosInstance.get("/logout", {
    withCredentials: true,
  });
  return res.data.message;
};
