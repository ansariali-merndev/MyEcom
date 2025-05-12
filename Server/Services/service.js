import jwt from "jsonwebtoken";

export const generateToken = ({ username, email, firstname, lastname }) => {
  return jwt.sign(
    {
      username,
      email,
      firstname,
      lastname,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
