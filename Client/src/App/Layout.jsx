import { Outlet } from "react-router-dom";
import { Header } from "./AppComponent/Header";
import { Footer } from "./AppComponent/Footer";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
