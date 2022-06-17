import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const all = [];
  Promise.all([uploadPhoto(), createUser()])
    .then((val) => {
      for (const dict of val) {
        for (const key in dict) {
          if (key !== 'status') {
            all.push(dict[key]);
          }
        }
      }
      console.log(all.join(' '));
    })
    .catch(() => console.log('Signup system offline'));
}
