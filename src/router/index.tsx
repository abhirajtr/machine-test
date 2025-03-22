import { withLoading } from "@src/hoc/withLoading.hoc";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "@src/layouts/default";
import ProtectedRoute from "./protectedRoutes";

const Home = withLoading(React.lazy(() => import("@src/pages/index")));
const Signup = withLoading(React.lazy(() => import("@src/pages/signup")));
const Login = withLoading(React.lazy(() => import("@src/pages/login")));

const routes = [
  {
    path: "/",
    element: <Home />,
    meta: { breadCrumb: [{ title: "Home" }] }
  }
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
