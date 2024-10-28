const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { tokenBlacklist } = require('../index');

exports.register = (req, res) => {
    console.log("hello register");
    res.send('User registration successful..');
};




exports.login = async (req, res) => {
    const { email, password } = req.body;

    console.log("email", email);

    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send('User not found');
        }

        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ message: 'Login successful', token });
        } else {
            res.status(401).send('Incorrect password');
        }
    } catch (error) {
        res.status(500).send('Error logging in');
    }
};

exports.logout = (req, res) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (token) {
        tokenBlacklist.push(token);
        res.status(200).send('Logout successful');
    } else {
        res.status(400).send('Token not provided');
    }
};

exports.dashboard = (req, res) => {
    res.send('User dashboard');
};
