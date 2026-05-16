import bmiController from "../controller/bmi-controller.js";
import express from "express";

const router = express.Router();

/**
 * @swagger
 * /api/bmi:
 *   post:
 *     summary: Calculate BMI (Body Mass Index)
 *     description: Calculate BMI based on weight and height. BMI is calculated as weight (kg) / height (m)²
 *     tags:
 *       - BMI Calculator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - weight
 *               - height
 *             properties:
 *               weight:
 *                 type: number
 *                 description: Weight in kilograms
 *                 example: 70
 *               height:
 *                 type: number
 *                 description: Height in meters
 *                 example: 1.75
 *     responses:
 *       200:
 *         description: BMI calculated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *                   description: The calculated BMI value
 *                   example: 22.86
 *       400:
 *         description: Missing weight or height parameter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Missing weight or height"
 */
router.post("/bmi", bmiController);

export default router;
