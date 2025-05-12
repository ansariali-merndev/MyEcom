import { verifyToken } from "../Services/service.js";

export const verifyIsLogged = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    req.user = null;
    return res.json({
      message: "Unauthorized",
    });
  }
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    return next();
  } catch (error) {
    req.user = null;
    console.log(error.message);
    return res.json({
      message: "Unauthorized",
    });
  }
};
