import jwt from "jsonwebtoken";

function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new Error("Authentication required.");
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      throw new Error("Authentication token missing.");
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.userId = decoded.id;

    next();
  } catch (error) {
    next(error);
  }
}

export default authenticate;