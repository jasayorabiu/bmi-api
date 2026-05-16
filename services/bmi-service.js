import express from "express";

const bmi = (weight, height) => {
  const result = weight / height ** 2;
  let inference = "";

  if (result < 18.5) {
    inference = "Underweight";
  } else if (result >= 18.5 && result < 25) {
    inference = "Normal weight";
  } else if (result >= 25 && result < 30) {
    inference = "Overweight";
  } else {
    inference = "Obesity";
  }

  return { result: result.toFixed(2), inference };
};

const bmiServices = bmi;

export default bmiServices;
