import { useEffect, useState } from "react";
import { fetchLogout, fetchProfile } from "../Api/fetching";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { image } from "../assets/assets";

export const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [logout, setLogout] = useState("");
  const Navigate = useNavigate();

  const logoutUser = async () => {
    const res = await fetchLogout();
    setLogout(res);
    if (res === "logout") {
      Navigate("/");
    }
  };

  const getProfile = async () => {
    const res = await fetchProfile();
    setUserData(res);
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (userData?.message === "Unauthorized") {
      Swal.fire({
        icon: "warning",
        title: userData.message,
        text: "Please login to access your profile.",
        confirmButtonText: "Go to Login",
      }).then(() => {
        Navigate("/login");
      });
    }
  }, [userData]);

  if (userData === null) {
    return (
      <div
        className="w-[100vw] h-[60vh] grid items-center justify-center"
        role="status"
      >
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else if (userData.message === "Authorized") {
    return (
      <section className="grid sm:grid-cols-[0.2fr_1fr] gap-4 my-14">
        <div className="grid justify-center">
          <div className="mx-auto sm:mx-0 bg-indigo-200 cursor-pointer hover:scale-110  w-20 h-20 md:w-30 md:h-30 rounded-full flex items-center justify-center overflow-hidden">
            <p className="text-6xl md:text-[85px] text-blue-600">
              {`${userData.firstname
                .slice(0, 1)
                .toUpperCase()}${userData.lastname.slice(0, 1).toUpperCase()}`}
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <p className="text-[16px] text-center sm:text-xl md:text-2xl lg:text-3xl">
            Welcome back,{" "}
            {`${userData.firstname.toLowerCase()} ${userData.lastname.toLowerCase()}`}
            ! 👋 We’re excited to have you here again. Dive into our latest
            collection, discover your next favorite read, and continue your
            literary journey with Book Bazaar. Your reading adventure awaits—so
            grab a book, relax, and enjoy the world of stories curated just for
            you.
          </p>
          <div className="flex flex-col gap-4">
            <p className="flex flex-col gap-1">
              Name:
              <span className="border rounded-2xl px-2 py-1">
                {userData.firstname.toUpperCase()}
              </span>
            </p>
            <p className="flex flex-col gap-1">
              Username:
              <span className="border rounded-2xl px-2 py-1">
                {userData.username}
              </span>
            </p>
            <p className="flex flex-col gap-1">
              Email:
              <span className="border rounded-2xl px-2 py-1">
                {userData.email}
              </span>
            </p>
          </div>
          <div className="grid justify-center my-6">
            <button
              onClick={logoutUser}
              className="bg-indigo-600 border-none rounded-full text-white py-2 px-6 cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </div>
      </section>
    );
  } else if (userData?.message === "Unauthorized") {
    return (
      <section>
        <img src={image.error} className="w-full" alt="" />
      </section>
    );
  } else {
    return <p>Something went wrong</p>;
  }
};
