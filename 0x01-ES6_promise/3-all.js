import uploadPhoto, createUser from utils.js

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      const { body } = results[0];
      const { firstName, lastName } = results[1];
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}
