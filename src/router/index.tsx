import { withLoading } from "@src/hoc/withLoading.hoc";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "@src/layouts/default";
import ProtectedRoute from "./protectedRoutes";
import PublicRoute from "@src/components/publicRoute";

const Home = withLoading(React.lazy(() => import("@src/pages/index")));
const Signup = withLoading(React.lazy(() => import("@src/pages/signup")));
const Login = withLoading(React.lazy(() => import("@src/pages/login")));
const Users = withLoading(React.lazy(() => import("@src/pages/users")));
const UserProfile = withLoading(React.lazy(() => import("@src/pages/userProfile")));

const routes = [
  {
    path: "/",
    element: <Home />,
    meta: { breadCrumb: [{ title: "Home" }] }
  },
  {
    path: "/users",
    element: <Users />,
    meta: { breadCrumb: [{ title: "Users" }] }
  },
  {
    path: "/profile",
    element: <UserProfile />,
    meta: { breadCrumb: [{ title: "Users" }] }
  },
];


const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          {routes.map(({ element, ...rest }, index) => (
            <Route
              {...rest}
              key={index}
              element={
                <ProtectedRoute component={element} redirectPath="/login" />
              }
            />
          ))}
        </Route>
        <Route path="/signup"
          element={<PublicRoute component={Signup} />} />
        <Route
          path="/login"
          element={<PublicRoute component={Login} />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
