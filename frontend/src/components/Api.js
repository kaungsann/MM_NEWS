const Base_Url = "http://127.0.0.1:5000";

export const getApi = async (route) => {
  const response = await fetch(`${Base_Url}${route}`);
  const resData = await response.json();
  return resData;
};

export const postApi = async (route, data, token) => {
  const response = fetch(`${Base_Url} ${route}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const resData = response.json();
  return resData;
};
