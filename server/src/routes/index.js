import express from "express";
import { getAll, createCrosshair } from "./controllers.js";

export const router = express.Router();

router.get("/", getAll);
router.post("/create", createCrosshair);
// router.get("/search", searchCrosshair);
// router.patch("/:id/likeCrosshair", isAuth, likeCrosshair);
