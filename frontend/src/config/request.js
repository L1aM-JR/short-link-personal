const hostName = "http://127.0.0.1:4000";

export async function request(url, method="post", body, headers = { 'content-type': 'application/json; charset=UTF-8' }) {
  try {
    if (body) {
      body = JSON.stringify(body);
    }
    console.log({ body });
    const result = await fetch(`${hostName}${url}`, { method, body, headers });
    const data = await result.json();

    if (!result.ok) {
      throw new Error(data.message || 'Что-то пошло не так');
    }

    return data;
  } catch(e) {
    throw e;
  }
}