export const copyToClipboard = (arg) =>
  navigator.clipboard
    .writeText(`${arg}`)
    .then((_) => null)
    .catch((err) => console.log(err));

export const sleep = async (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));
