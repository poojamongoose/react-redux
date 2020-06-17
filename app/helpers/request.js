export async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  return response.json();
};

export async function getData(url) {
  const response = await fetch(url, {
    method: 'GET',
  });

  return response.json();
};
