import { Link } from "wouter";
import verticalBoxMaterial from "../constants/verticalBoxMaterial.jsx";

const sideBarLinks = [
  { icon: verticalBoxMaterial.fileIcon, label: "Projects", href: "/projects" },
  { icon: verticalBoxMaterial.fileIcon, label: "Skills", href: "/skills" },
  { icon: verticalBoxMaterial.fileIcon, label: "About", href: "/about" },
  { icon: verticalBoxMaterial.fileIcon, label: "Contact", href: "/contact" },
  { icon: verticalBoxMaterial.fileIcon, label: "Resume", href: "/resume" },
];

export default function RootLayout({ children }) {
  return (
    <div className="main-wrapper">
      <aside className="left bg-blur w-full h-full flex justify-between flex-col border">
        <div className="hero-heading">
          <h1>Hi I'm Ritik</h1>
        </div>
        <nav className="mt-6">
          {sideBarLinks.map((item) => {
            const Icon = item.icon.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="sidebar-links"
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      {/* Main content */}
      <main className="center h-full w-full bg-blur">{children}</main>
      <aside className="right bg-blur w-full">
        <h2>Right Box Info</h2>
      </aside>
    </div>
  );
}