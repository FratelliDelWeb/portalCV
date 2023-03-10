const jwtSecret = "4715aed3c946f7b0a38e6b534a9583628d84e96d10fbc04700770d572af3dce43625dd";
const jwt = require("jsonwebtoken");

exports.adminAuth = (req, res, next) => {
  console.log(jwt);
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      }
      if (decodedToken.role !== "admin") {
        return res.status(401).json({ message: "Not authorized" });
      }
      next();
    });
  } else {
    return res.status(401).json({ message: "Not authorized, token not available" });
  }
};

exports.userAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      }
      if (decodedToken.role !== "Basic" && decodedToken.role !== "admin") {
        return res.status(401).json({ message: "Not authorized" });
      }
      next();
    });
  } else {
    return res.status(401).json({ message: "Not authorized, token not available" });
  }
};
