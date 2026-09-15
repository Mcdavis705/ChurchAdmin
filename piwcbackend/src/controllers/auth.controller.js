import authService from "../services/auth.service.js";

async function register(req, res, next) {
  try {
    const user = await authService.register(req.body);

    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const result = await authService.login(req.body);

    return res.status(200).json({
      success: true,
      message: "User logged in successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
} 

export default {
  register,
  login,
};