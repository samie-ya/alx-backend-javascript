import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((value) => {
      value.forEach((val) => {
        const result = val;
        if (result.reason) {
          const err = result.reason.toString();
          result.reason = err;
        }
	return val;
      });
    });
}
