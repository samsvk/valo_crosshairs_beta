import { useLocation } from "react-router-dom";
export const copyToClipboard = (arg) =>
  navigator.clipboard
    .writeText(`${arg}`)
    .then((_) => null)
    .catch((err) => console.log(err));

export const sleep = async (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const useQuery = () => new URLSearchParams(useLocation().search);
