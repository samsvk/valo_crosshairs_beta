import Crosshair from "../models/crosshair.js";

/*
{
  limit: number,
  page: number,
  data: [],  
}
*/

const getAll = async (req, res) => {
  const { page } = req.query;
  try {
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
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

// const createCrosshair = async (req, res) => {
//   const post = req.body;
//   const newCrosshair = new Crosshair({
//     ...post,
//     createdAt: new Date().toISOString(),
//   });
//   try {
//     await newCrosshair.save();
//     res.status(201).json(newCrosshair);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

const searchCrosshair = async (req, res) => {
  const { search } = req.query;
  try {
    const title = new RegExp(search, "i");
    const posts = await Crosshair.find({
      $or: [{ title }, { color: title }],
    });
    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getLiked = async (req, res) => {
  const { liked } = req.params;
  const ids = liked.split("-");
  try {
    const posts = await Crosshair.find({
      $or: [{ _id: ids }],
    });
    console.log(posts);
    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getAll, searchCrosshair, getLiked };
