const API_HOST = process.env.EXPO_PUBLIC_API_URL;

export async function post(
  endpoint,
  body,
) {
  const response = await fetch(`${API_HOST}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await response.json();
}

// TODO:: get, put, delete 함수도 만들어야 함
