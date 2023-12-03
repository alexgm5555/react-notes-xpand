export interface apiRestInterface {
  url: string,
  method: ('GET'|'POST'|'DELETE'|'PUT'|'PATCH'),
  body?: {},
}
export const apiRest = async (data: apiRestInterface) => {
  const { url, method, body} = data;
  const resp = await fetch(`${url}`,
    {
      method,
      headers: {
        "Content-type": "application/json",
        "ngrok-skip-browser-warning": "69420"
      },
      body: JSON.stringify(body)}
  )
  return resp.json();
}