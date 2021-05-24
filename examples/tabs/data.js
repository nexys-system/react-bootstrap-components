export const getProfile = () => {
  console.log("promise");
  return Promise.resolve({firstName: "John", lastName: "Doe"});
};
export const getSocialMedia = () => {
  console.log("promise 2");
  return Promise.resolve([{name: "facebook"}, {name: "instagram"}]);
};
