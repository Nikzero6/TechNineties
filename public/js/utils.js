const addCart = async (url, id) => {
  const response = await fetch(url + id, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
  });

  return response.status;
};

const removeCart = async (url, id) => {
  const response = await fetch(url + id, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
  });

  return response.status;
};

export { addCart, removeCart };
