import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((val) => {
      process.stdout.write(`${val.body} `);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
  createUser()
    .then((val) => {
      process.stdout.write(`${val.firstName} `);
      process.stdout.write(`${val.lastName}\n`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
