import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((val) => {
      process.stdout.write(`${val.body} `);
    });
  createUser()
    .then((val) => {
      process.stdout.write(`${val.firstName} `);
      process.stdout.write(`${val.lastName}\n`);
    });
}
