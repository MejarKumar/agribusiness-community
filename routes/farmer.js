const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Farmer = require("../models/farmer");
const Joi = require("joi");
const express = require("express");
const router = express.Router();


router.get("/signup", (req, res) => {
    res.status(200).json(req.body)
})

router.get("/hello", (req, res) => {
    res.json("hello");
})

router.post("/signup", async (req, res) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(3).max(200).required().email(),
        password: Joi.string().min(6).max(200).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    let farmer = await Farmer.findOne({ email: req.body.email });
    if (farmer) return res.status(400).send("Farmer already exists...");

    const { username, email, password } = req.body;

    farmer = new Farmer({ username, email, password });

    const salt = await bcrypt.genSalt(10);
    farmer.password = await bcrypt.hash(farmer.password, salt);

    await farmer.save();

    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({ _id: farmer._id, username: farmer.username, email: farmer.email }, jwtSecretKey)

    res.send(token);
});


router.post("/login", async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().min(3).max(200).required().email(),
        password: Joi.string().min(6).max(200).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    let farmer = await Farmer.findOne({ email: req.body.email });
    if (!farmer) return res.status(400).send("Invalid email or password...");

    const validPassword = await bcrypt.compare(req.body.password, farmer.password);
    if (!validPassword)
        return res.status(400).send("Invalid email or password...");

    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({ _id: farmer._id, username: farmer.username, email: farmer.email }, jwtSecretKey)

    res.send(token);
});




module.exports = router;