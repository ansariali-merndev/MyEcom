import { useEffect, useState } from "react";
import { Title } from "../Components/Title";
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { fetchLogin, fetchLogout, fetchVerify } from "../Api/fetching";
import Swal from "sweetalert2";

export const Login = () => {
  const navigate = useNavigate();
  const initialLogin = {
    username: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState(initialLogin);
  const [checkVerify, setCheckVerify] = useState("");
  const location = useLocation();
  const Navigate = useNavigate();

  const logoutUser = async () => {
    const res = await fetchLogout();
    if (res === "logout") {
      Navigate("/");
    }
  };

  useEffect(() => {
    const verifyUser = async () => {
      const verify = await fetchVerify();
      console.log(verify);
      setCheckVerify(verify);
    };

    verifyUser();
  }, [location.pathname]);

  const handleLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const res = await fetchLogin(loginData);
    Swal.fire({
      icon: res.toLowerCase().includes("check") ? "error" : "success",
      title: res,
      timer: 2000,
      showConfirmButton: false,
    });
    if (!res.toLowerCase().includes("check")) {
      navigate("/store");
    }
    setLoginData(initialLogin);
  };

  if (checkVerify !== "authorized") {
    return (
      <section className="grid justify-center h-[45vh] sm:h-[60vh] mt-14 sm:mb-12">
        <div>
          <Title text1={""} text2={"login"} />
          <form
            onSubmit={handleSubmitForm}
            className="flex flex-col gap-4 w-80 sm:w-100"
          >
            <input
              className="bg-slate-100 border outline-none py-1 px-2 w-full border-gray-400"
              type="text"
              placeholder="Username"
              name="username"
              autoComplete="off"
              value={loginData.username}
              onChange={handleLoginData}
            />
            <div className="relative">
              <input
                className="bg-slate-100 border outline-none py-1 px-2 w-full border-gray-400"
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Password"
                name="password"
                autoComplete="off"
                value={loginData.password}
                onChange={handleLoginData}
              />
              {showPassword ? (
                <BiShow
                  onClick={() => setShowPassword(false)}
                  className="absolute top-2 right-3 cursor-pointer"
                />
              ) : (
                <BiSolidHide
                  onClick={() => setShowPassword(true)}
                  className="absolute top-2 right-3 cursor-pointer"
                />
              )}
              <div className="flex justify-between">
                <p className="text-gray-600 cursor-pointer">Forgot Password</p>
                <NavLink
                  to="/register"
                  className="text-gray-600 cursor-pointer"
                >
                  Create account
                </NavLink>
              </div>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white py-1.5 my-8  cursor-pointer hover:bg-indigo-800"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    );
  } else {
    return (
      <section className="h-[40vh] grid items-center justify-center">
        <div>
          <button
            onClick={logoutUser}
            className="bg-indigo-600 text-white px-4 py-2 rounded-[5px] cursor-pointer"
          >
            Logout
          </button>
        </div>
      </section>
    );
  }
};
