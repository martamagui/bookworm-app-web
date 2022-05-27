export const authConfig = () => {
  return { Authorization: "Bearer " + `${import.meta.env.VITE_TEST_TOKEN}` };
};
