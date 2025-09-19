import { Switch, Route } from "wouter"
import RootLayout from "./components/RootLayout.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./pages/Resume.jsx";

function AppRoutes() {
  return (
    <RootLayout>
      <Switch>
        <Route path='/projects' component={Projects} />
        <Route path='/skills' component={Skills} />
        <Route path='/about' component={About} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
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
