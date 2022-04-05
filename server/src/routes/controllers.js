import mongoose from "mongoose";
import Crosshair from "../models/crosshair.js";

export const getAll = async (req, res) => {
  const { page } = req.query;
  const LIMIT = 20;
  const startIndex = (Number(page) - 1) * LIMIT;
  const total = await Crosshair.countDocuments({});
  const posts = await Crosshair.find()
    .sort({ _id: -1 })
    .limit(LIMIT)
    .skip(startIndex);
  return res.json({
    data: posts,
    currentPage: Number(page),
    numberOfPages: Math.ceil(total / LIMIT),
  });
};

export const createCrosshair = async (req, res) => {
  const post = req.body;
  const newCrosshair = new Crosshair({
    ...post,
    createdAt: new Date().toISOString(),
  });
  try {
    await newCrosshair.save();
    res.status(201).json(newCrosshair);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
