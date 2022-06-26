import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const dict = {}
  try {
    dict.photo: await uploadPhoto();
    dict.user: await createUser();
    return dict;
  } catch (e) {
    return { photo: null, user: null };
  }
}
