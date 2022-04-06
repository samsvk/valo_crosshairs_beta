import * as api from "./index";

const getCrosshairs = async (page) => {
  try {
    const { data } = await api.getAllCrosshairs(page);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getCrosshairs };
