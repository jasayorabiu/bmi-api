import express from "express";
import bmiRouter from "./routers/bmi-router.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import dotenv from "dotenv";
import winston from "winston/lib/winston/config/index.js";
import logger from "./utils/logger.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BMI Calculator API",
      version: "1.0.0",
      description: "A simple API to calculate Body Mass Index (BMI)",
      contact: {
        name: "API Support",
      },
    },
    servers: [
      {
        url: "https://bmi-api-506f.onrender.com" ,
        description: "Development server",
      },
    ],
  },
  apis: ["./routers/*.js"], // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger UI route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", bmiRouter);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}: http://localhost:${PORT}`);
  logger.info(
    `Swagger documentation available at: http://localhost:${PORT}/api-docs`,
  );
});
