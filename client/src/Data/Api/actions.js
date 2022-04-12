import * as api from "./index";

const getCrosshairs = async (page) => {
  try {
    const { data } = await api.getAllCrosshairs(page);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getCrosshairBySearch = async (name) => {
  try {
    const { data } = await api.getCrosshairBySearch(name);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLikedCrosshairs = async (liked) => {
  const userLiked = liked.map((l) => l).join("-");
  try {
    const { data } = await api.getLikedCrosshairs(userLiked);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getCrosshairs, getCrosshairBySearch, getLikedCrosshairs };
