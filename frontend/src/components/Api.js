const Base_Url = "http://127.0.0.1:5000";

export const getApi = async (route) => {
  const response = await fetch(`${Base_Url}${route}`);
  const resData = await response.json();
  return resData;
};
