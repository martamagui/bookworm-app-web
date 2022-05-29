export const axiosConfig = () => {
  try {
    const token = window.localStorage.getItem("bookWormToken")
    return { Authorization: "Bearer " + `${token}` };
  } catch (error) {
    console.error(error)
  }
};
