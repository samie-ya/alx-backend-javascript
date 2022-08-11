// This function will return a promise

module.exports.getPaymentTokenFromAPI = (success) => {
  if (success === true) {
    return new Promise((resolve, reject) => {
      resolve({ data: 'Successful response from the API' });
    });
  }
};
