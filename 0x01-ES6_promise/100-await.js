import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const photo = uploadPhoto();
    const user = createUser();
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
