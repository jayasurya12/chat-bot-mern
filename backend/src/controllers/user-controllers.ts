import User from "../models/User.js"
import { Request, Response, NextFunction } from 'express';
import { compare, hash } from 'bcrypt';
import { greenBright, red } from "colorette";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";

export const getAllUser = async(req: Request, res: Response, next: NextFunction) =>{
    //get all users
    try {
        const users = await User.find();
        return res.status(200).json({ message: 'Ok', users });
    } catch (error) {
        console.log('\x1b[31m', error.message);
        return res.status(200).json({ message: 'Error', cause: error.message });    
    }
}

export const userSignup = async(req: Request, res: Response, next: NextFunction) =>{
    // User signup!.
    try {
        
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(401).send("User already register");
        const hashPassword = await hash(password, 10); // Password hashing is here!.
        const user = new User({ name, email, password: hashPassword });
        await user.save();
        console.log(greenBright('Successfully created 🎊👏👍🎉'));
        
        // create token and store cookie.
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: 'localhost',
            path: '/',
            signed: true
        });

        const token = createToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, 
        { 
            path: '/', 
            domain: 'localhost',
            expires,
            httpOnly: true,
            signed: true
        })

        return res.status(200).json({ message: 'Ok', id: user._id.toString() });

    } catch (error) {
        console.log('\x1b[31m', error.message);
        return res.status(200).json({ message: 'Error', cause: error.message });    
    }
}

export const userLogin = async(req: Request, res: Response, next: NextFunction) => {
    // User login!.
    try {
        
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(401).send("User not register!!!");
        // 401 is a Unauthorized error..!!!..
        const isPassword = await compare(password, user.password);
        if (!isPassword) return res.status(403).send("User Password is wrong 🤢"); 
        // 403 is forbidden error.
        
        // create token and store cookie..,
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: 'localhost',
            path: '/',
            signed: true
        });

        const token = createToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, 
        { 
            path: '/', 
            domain: 'localhost',
            expires,
            httpOnly: true,
            signed: true
        })

        return res.status(200).json({ message: 'Ok', id: user._id.toString() });

    } catch (error) {
        console.log('\x1b[31m', error.message);
        return res.status(200).json({ message: 'Error', cause: error.message });    
    }
}