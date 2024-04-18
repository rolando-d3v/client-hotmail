// import React, { useEffect, useReducer } from "react";
// import AuthContext from "./authContext";
// import { authReducer } from "./authReducer";

// export default function AuthState(props) {
//   // iniciador del reducer
//   const init = () => {
//     return JSON.parse(localStorage.getItem("user")) || { logged: false };
//   };

//   // userReducer hooks
//   const [user, dispatch] = useReducer(authReducer, {}, init);

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(user));
//   }, [user]);

//   return (
//     <AuthContext.Provider value={{ user, dispatch }}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// }
