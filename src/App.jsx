import { Switch, Route } from "wouter"
import RootLayout from "./components/RootLayout.jsx";
import ProjectsSection from "./pages/ProjectsSection.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./pages/Resume.jsx";
import Profile from "./pages/Profile.jsx";
import SkillsSection from "./pages/SkillsSection.jsx";
import AboutSection from "./pages/AboutSection.jsx";

function AppRoutes() {
  return (
    <RootLayout rightChildren={
        <Profile/>
      }>
      <Switch>
        <Route path='/projects' component={ProjectsSection} />
        <Route path='/skills' component={SkillsSection} />
        <Route path='/about' component={AboutSection} />
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
