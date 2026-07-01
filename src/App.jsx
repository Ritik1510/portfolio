import { Switch, Route, Redirect } from "wouter"
import RootLayout from "./components/RootLayout.jsx";
import Profile from "./pages/Profile.jsx";
import { ROUTES } from "./routes/routes.config.js";
import { Suspense } from "react";
import { ImSpinner3 } from "react-icons/im";

function AppRoutes() {
  return (
    <RootLayout rightChildren={<Profile />}>
      <Suspense fallback={<ImSpinner3 />}>
        <Switch>
          <Route path="/"> {/** default page for first rendering & reloads */}
            <Redirect to="/projects" />
          </Route>
          {ROUTES.map(({ path, component }) => (
            <Route key={path} path={path} component={component} />
          ))}
        </Switch>
      </Suspense>
    </RootLayout>
  );
}

export default function App() {
  return (
    <>
      <AppRoutes />
    </>
  )
}
