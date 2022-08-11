// This function will return a promise

function getPaymentTokenFromAPI(success) {
  if (success === true) {
    return new Promise((resolve, reject) => {
      resolve({ data: 'Successful response from the API' });
    });
  }
};

module.exports = getPaymentTokenFromAPI;
