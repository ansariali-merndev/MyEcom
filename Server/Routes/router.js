import express from "express";
import {
  getHome,
  getUserProfile,
  getVerification,
  handleLoginForm,
  handleLogoutUser,
  handleRegisterForm,
} from "../Controllers/controller.js";
import { verifyIsLogged } from "../Middleware/verifyToken.js";

export const router = express.Router();

router.get("/", getHome);
router.post("/register", handleRegisterForm);
router.post("/login", handleLoginForm);
router.get("/profile", verifyIsLogged, getUserProfile);
router.get("/logout", handleLogoutUser);
router.get("/verify", verifyIsLogged, getVerification);
