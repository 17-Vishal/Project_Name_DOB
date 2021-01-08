import express from 'express';
import mongoose from 'mongoose';

import FormMessage from '../models/formMessage.js';

const router = express.Router();


export const getForms = async (req, res) => { 
    // const { type } = req.body;
    try {
        
        const formMessages = await FormMessage.find();
                
        res.status(200).json(formMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createForm = async (req, res) => {
    const { name, dob } = req.body;

    const newFormMessage = new FormMessage({ name, dob })

    try {
        await newFormMessage.save();

        res.status(201).json(newFormMessage );
    } catch (error) {
        res.status(409).json({ message: error });
    }
}


export default router;