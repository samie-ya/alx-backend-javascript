export default function getResponseFromAPI() {
  const forSuccessful = true;
  return new Promise((resolve, reject) => {
    if (forSuccessful) {
      resolve();
    } else {
      reject();
    }
  });
}
