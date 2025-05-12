import { registerModel } from "../Model/registration.js";
import bcrypt from "bcryptjs";
import { registerValidate } from "../Validator/registerValidate.js";
import { generateToken } from "../Services/service.js";

export const getHome = (req, res) => {
  res.send("Hello Express");
};

export const getVerification = (req, res) => {
  res.json({
    message: "authorized",
    user: req.user,
  });
};

export const handleLogoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
    path: "/",
  });
  res.json({
    message: "logout",
  });
};

export const getUserProfile = (req, res) => {
  if (req.user === null) {
    return res.json({
      message: "Unauthorized",
    });
  }
  const { firstname, lastname, username, email } = req.user;
  res.json({
    message: "Authorized",
    firstname,
    lastname,
    username,
    email,
  });
};

export const handleLoginForm = async (req, res) => {
  const { username, password } = req.body;
  const user = await registerModel.findOne({ username });
  if (!user) {
    return res.json({
      message: "Please check your credentials.",
    });
  } else {
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
      const token = generateToken({
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
      });
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
        path: "/",
      });
      res.json({
        message: "Login Successfully",
        token,
      });
    } else {
      res.json({
        message: "Please check your credentials.",
      });
    }
  }
};

export const handleRegisterForm = async (req, res) => {
  try {
    const validatedData = registerValidate.parse(req.body);
    // console.log(validatedData);
    const { username, firstname, lastname, email, password } = validatedData;

    const existingUser = await registerModel.findOne({ username });
    if (existingUser) {
      return res.json({
        message: "Username is already exists",
      });
    }

    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRound);

    await registerModel.create({
      username,
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    const token = generateToken({
      username,
      email,
      firstname,
      lastname,
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
      path: "/",
    });
    return res.json({
      message: "Successfully",
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res.json({
        message: error.issues[0].message,
      });
    }
    res.json({
      message: `Error: ${error.message}`,
    });
  }
};
