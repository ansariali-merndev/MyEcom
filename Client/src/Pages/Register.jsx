import { useState } from "react";
import { Title } from "../Components/Title";
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { fetchRegister } from "../Api/fetching";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const initialFormData = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const res = await fetchRegister(formData);

    if (res === "Successfully") {
      setFormData(initialFormData);
      Swal.fire({
        icon: "success",
        title: "Account Created",
        text: "You have registered successfully",
        showConfirmButton: true,
      });
      navigate("/store");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Something went wrong",
        text: res,
        showConfirmButton: true,
      });
    }
  };

  return (
    <section className="grid items-center md:grid-cols-[1fr_1fr] sm:px-10 sm:mx-4">
      <img className="w-[90%]" src="register.jpg" alt="" />
      <div>
        <div>
          <Title text1={""} text2={"signup"} />
        </div>
        <form
          onSubmit={handleSubmitForm}
          className="flex flex-col gap-6 lg:mr-25"
        >
          <div className="flex gap-6">
            <input
              className="bg-slate-100 border outline-none py-1 px-2 w-full border-gray-400"
              autoComplete="off"
              type="text"
              placeholder="First Name"
              name="firstname"
              value={formData.firstname}
              onChange={handleFormData}
            />
            <input
              type="text"
              placeholder="Last Name"
              autoComplete="off"
              className="border py-1 px-2 outline-none bg-slate-100 w-full border-gray-400"
              name="lastname"
              value={formData.lastname}
              onChange={handleFormData}
            />
          </div>
          <input
            autoCapitalize="off"
            className="bg-slate-100 border outline-none py-1 px-2 w-full border-gray-400"
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleFormData}
          />
          <input
            autoCapitalize="off"
            className="bg-slate-100 border outline-none py-1 px-2 w-full border-gray-400"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleFormData}
          />
          <div className="relative w-full">
            <input
              autoCapitalize="off"
              className="outline-none border bg-slate-100 py-1 px-2 w-full border-gray-400"
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleFormData}
            />
            <BiSolidHide
              onClick={() => setShowPassword(true)}
              className={`absolute right-3 top-2 cursor-pointer ${
                showPassword ? "hidden" : ""
              }`}
            />
            <BiShow
              onClick={() => setShowPassword(false)}
              className={`absolute right-3 top-2 cursor-pointer ${
                !showPassword ? "hidden" : ""
              }`}
            />
          </div>
          <button
            className="bg-indigo-600 text-white py-1.5 my-1 cursor-pointer hover:bg-indigo-800"
            type="submit"
          >
            Create Account
          </button>
        </form>
        <p className="my-2 leading-2">
          Already have an account?{" "}
          <NavLink className="text-indigo-600" to="/login">
            Log in
          </NavLink>
        </p>
      </div>
    </section>
  );
};
