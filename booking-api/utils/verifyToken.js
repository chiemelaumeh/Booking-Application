import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, "You are not authenticated"));
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return next(errorHandler(403, "Token is not valid"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(errorHandler(403, "You are not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next);
  if (req.user.isAdmin) {
  } else {
    return next(errorHandler(403, "You are not an Admin"));
  }
};

// export const verifyAdmin = (req, res, next) => {
//   verifyToken(req, res, next, () => {
//     console.log(req.user)
//     if (req.user.isAdmin) {
//       next();
//     } else {
//       return next(errorHandler(403, "You are not authorized!"));
//     }
//   });
// };
