import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// import AuthContext from "../context/auth/authContext";
// import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

// //routes perzonalizadas
// import HomeRouter from "./HomeRouter";
// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from './PublicRoute';

export default function AppRouter() {
  // const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/:email" element={<Login/>}  />
      {/* <Route path="/" element={<Login />} auth={user.logged} /> */}
      {/* <Route
        exact
        path="/login/:email"
        component={Layout}
        auth={user.logged}
      />
      <Route exact path="/home" component={Home} auth={user.logged} />
      <PrivateRoute path="/" component={HomeRouter} auth={user.logged} /> */}
    </Routes>
  );
}
