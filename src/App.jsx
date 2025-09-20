import { Switch, Route } from "wouter"
import RootLayout from "./components/RootLayout.jsx";
import ProjectsSection from "./pages/ProjectsSection.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/SkillsSection.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./pages/Resume.jsx";

function AppRoutes() {
  return (
    <RootLayout>
      <Switch>
        <Route path='/projects' component={ProjectsSection} />
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
