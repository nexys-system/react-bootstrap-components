import * as TT from "./type";

export const getProfile = (): Promise<TT.Profile> => {
  console.log("promise");
  return Promise.resolve({ firstName: "John", lastName: "Doe" });
};

export const getSocialMedia = (): Promise<TT.SocialMedia[]> => {
  console.log("promise 2");
  return Promise.resolve([{ name: "facebook" }, { name: "instagram" }]);
};
