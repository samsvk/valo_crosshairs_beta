import express from "express";
import { getAll, createCrosshair, searchCrosshair } from "./controllers.js";

export const router = express.Router();

router.get("/", getAll);
router.post("/create", createCrosshair);
router.get("/search", searchCrosshair);
