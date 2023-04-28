import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "@shared/ui/Loader";
import { ROUTE } from "./routes";
import { SignInForm } from "./Login/SignIn";
import { SignUpForm } from "./Login/SignUp";

import MainPage from "./Main";

const LoginPage = lazy(() => import("./Login"));
const NotFoundPage = lazy(() => import("./NotFound"));

export function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROUTE.MAIN} element={<MainPage />} />
          <Route path={ROUTE.LOGIN} element={<LoginPage />}>
            <Route index element={<SignInForm />} />
            <Route path={ROUTE.SIGN_IN} element={<SignInForm />} />
            <Route path={ROUTE.SIGN_UP} element={<SignUpForm />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
