import bcrypt from "bcrypt";
import userRepository from "../repositories/user.repository.js";
import jwt from "jsonwebtoken";

async function register(userData) {
  const existingUser = await userRepository.findByEmail(userData.email);

  if (existingUser) {
    throw new Error("Email already exists.");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const newUser = {
    ...userData,
    password: hashedPassword,
  };

  const user = await userRepository.create(newUser);

  const { password, ...safeUser } = user;

  return safeUser;
}



async function login(credentials) {
  const { email, password } = credentials;

  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password.");
  }

  const token = jwt.sign(
    { 
      id: user.id
    }, 
    process.env.JWT_SECRET, 
    {
    expiresIn: "1h",
    }
  );

  const { password: _, ...safeUser } = user;

  return { 
    user: safeUser, 
    token };
}

export default {
  register,
  login,
};