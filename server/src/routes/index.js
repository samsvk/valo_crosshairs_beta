import express from "express";
import { getAll, searchCrosshair, getLiked } from "./controllers.js";

export const router = express.Router();

router.get("/", getAll);
// router.post("/create", createCrosshair);
router.get("/search", searchCrosshair);
router.get("/liked/:liked", getLiked);
