import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const dict = {};
  try {
    const photos = await uploadPhoto();
    dict.photo = photos;
  } catch (e) {
    dict.photo = null;
  }
  try {
    const users = await createUser();
    dict.user = users;
  } catch (e) {
    dict.user = null;
  }
  return dict;
}
