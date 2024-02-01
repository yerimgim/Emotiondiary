import { Navigate, useLocation } from "react-router-dom";

export const setToken = (token: any) => {
  console.log(token);
  localStorage.setItem("token", JSON.stringify(token));
};
export const getToken = (token: any) => {
  console.log(token);
  return localStorage.getItem("token");
};
// export function RequireToken({ children }) {
//   // let auth = fetchToken();
//   let location = useLocation();

//   if (!auth) {
//     return <Navigate to="/" state={{ from: location }} />;
//   }

//   return children;
// }
