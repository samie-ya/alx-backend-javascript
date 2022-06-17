export default function handleResponseFromAPI(promise) {
  const dict = {};
  dict.status = 200;
  dict.body = 'success';
  promise
    .then(() => dict)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
