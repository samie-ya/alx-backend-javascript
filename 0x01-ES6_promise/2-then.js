export default function handleResponseFromAPI(promise) {
  const dict = {};
  dict.status = 200;
  dict.body = 'success';
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
