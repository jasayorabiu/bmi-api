import express from "express";
import bmiServices from "../services/bmi-service.js";

const bmiController = (req, res) => {
  const { weight, height } = req.body;
  if (weight && height) {
    const result = bmiServices(weight, height);
    return res.json({ result });
  } else {
    res.status(400).json({ error: "Missing weight or height" });
  }
};

export default bmiController;
