import { Router } from 'express';
import { getAllUser, userSignup, userLogin } from '../controllers/user-controllers.js';
import { validate, signupValidator, loginValidator } from '../utils/validatores.js';

const userRoutes = Router();

userRoutes.get("/", getAllUser);
userRoutes.post("/signup", validate(signupValidator),  userSignup);
userRoutes.post("/login", validate(loginValidator),  userLogin);

export default userRoutes;