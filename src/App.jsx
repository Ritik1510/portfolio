import { Switch, Route, Redirect } from "wouter"
import RootLayout from "./components/RootLayout.jsx";
import Profile from "./pages/Profile.jsx";
import { ROUTES } from "./routes/routes.config.js";

function AppRoutes() {
  return (
    <RootLayout rightChildren={<Profile/>}>
      <Switch>
        <Route path="/"> {/** default page for first rendering */}
          <Redirect to="/projects" />
        </Route>
        {ROUTES.map(({path, component}) => (
          <Route key={path} path={path} component={component} />
        ))}
      </Switch>
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
