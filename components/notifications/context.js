import React from "../../_snowpack/pkg/react.js";
const initialState = {
  notifications: [],
  setNotification: (t) => void 0,
  rmNotification: (idx) => void 0
};
const CustomContext = React.createContext(initialState);
export const useToastContext = () => React.useContext(CustomContext);
export default CustomContext;
