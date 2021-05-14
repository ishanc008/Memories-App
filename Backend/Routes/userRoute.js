const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../Models/userModel");

let user = require("../Models/userModel");
const secret = "test";

router.route("/signin").post(async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "No user found" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Password incorrect" });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, { expiresIn: "1h" })

        res.status(200).json({ profile: existingUser, token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
})

router.route("/signup").post(async (req, res) => {
    console.log(req.body);
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already registered" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password Mismatch" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await userModel.create({
            name: `${firstName}${lastName}`,
            email: email,
            password: hashedPassword,
        })

        const token = jwt.sign({ email: email, id: user._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ profile: user, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
})

module.exports = router

